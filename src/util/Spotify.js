const clientId = '95628d95624642bcb671bda898134570'; // Insert client ID here.
const redirectUri = 'http://localhost:5173/index.html'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

const params = new URLSearchParams(window.location.search);
const code = params.get("code");
let access_token = '';



// 1. Code Challenge generation from a Code Verifier.
function generateCodeVerifier(length) {
  // JOSH THE ISSUE COULD BE THE BELOW TEXT VARABLE< THAT IS THE CODE VERABLE ABOVE< JUST A DIFFARNT NAME. MATCH THEM UP 
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

const Spotify = {
  // 2. Request authorization from the user and retrieve the authorization code.

  async redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem('verifier', verifier);

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('response_type', 'code');
    params.append('redirect_uri', redirectUri);
    params.append('scope', 'user-read-private user-read-email playlist-modify-private playlist-modify-public');
    params.append('code_challenge_method', 'S256');
    params.append('code_challenge', challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  },
  // 3. Request an access token from the authorization code.

  async getAccessToken(clientId, code) {
    const verifier = localStorage.getItem('verifier');

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);
    params.append('code_verifier', verifier);

    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    const { access_token } = await result.json();
    return access_token;
  },

  async search(term) {
    console.log('token returned' + JSON.stringify(access_token));
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.tracks) return [];
        return json.tracks.items.map((t) => ({
          id: t.id,
          name: t.name,
          artist: t.artists[0].name,
          album: t.album.name,
          uri: t.uri,
        }));
      });
  },
  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) return;
    const header = { Authorization: `Bearer ${access_token}` };

    const userResponse = await fetch(`https://api.spotify.com/v1/me`, {
      headers: header,
    });
    const userId = (await userResponse.json()).id;

    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: 'POST',
        headers: {
          ...header,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      }
    );

    const playlistId = (await playlistResponse.json()).id;

    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        ...header,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uris: trackUris }),
    });
  },
};

// Initial authorization to Spotify
if (!code) {
  Spotify.redirectToAuthCodeFlow(clientId);
  console.log('redirecting to auth code flow')
} else {
  access_token = await Spotify.getAccessToken(clientId, code);
}

export default Spotify;