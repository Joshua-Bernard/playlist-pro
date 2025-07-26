import Spotify from './util/Spotify';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlaylistName from './components/PlaylistName/PlaylistName';
import Playlist from './components/Playlist/Playlist';
import styles from './App.module.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [playlistName, setPlaylistName] = useState('My new Playlist');

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    let isActive = true;
    const timerId = setTimeout(() => {
      Spotify.search(searchQuery).then((result) => {
        if (isActive) {
          setSearchResults(result);
        }
      });
    }, 500);
    return () => {
      clearTimeout(timerId);
      isActive = false;
    };
  }, [searchQuery]);

  function handleAddTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    // const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log('Track already exists');
    } else {
      const modifiedTrack = {
        ...track,
        isInPlaylist: true,
      };
      setPlaylistTracks((prevTracks) => [...prevTracks, modifiedTrack]);
    }
  }

  function handleRemoveTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    // const modifiedTrack = {
    //   ...track,
    //   isInPlaylist: false,
    //};
    setPlaylistTracks(existingTrack);
  }




  function handlePlaylistNameChange(e) {
    setPlaylistName(e.target.value);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }

  function handleSearchBarChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className={styles.gridContainer}>
      <h1 className={styles.title}>
        Playlist <span className={styles.titleHighlight}>Pro</span>
      </h1>
      <SearchBar
        handleSearchBarChange={handleSearchBarChange}
        searchQuery={searchQuery}
      />
      <SearchResults searchResults={searchResults} onAdd={handleAddTrack} />
      <PlaylistName
        handlePlaylistNameChange={handlePlaylistNameChange}
        playlistName={playlistName}
      />
      <Playlist
        playlistTracks={playlistTracks}
        onRemove={handleRemoveTrack}
        savePlaylist={savePlaylist}
      />
    </div>
  );
}

export default App;
