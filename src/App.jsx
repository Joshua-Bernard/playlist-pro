import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlaylistName from './components/PlaylistName/PlaylistName';
import Playlist from './components/Playlist/Playlist';
import styles from './App.module.css';

function App() {
  const [songs, setSongs] = useState([
    {
      name: 'Smoothies in 1991',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 1,
    },
    {
      name: 'N95',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 2,
    },
    {
      name: "Don't Check Me",
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 3,
    },
    {
      name: 'United in Grief',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 4,
    },
    {
      name: 'Organic Fatherhood',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 5,
    },
    {
      name: 'Father Time',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 6,
    },
    {
      name: '6am in Sausalito',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 7,
    },
    {
      name: 'Rich Spirit',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 8,
    },
    {
      name: 'Private Valet',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 9,
    },
    {
      name: 'We Cry Together',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 10,
    },
    {
      name: 'Iced Coffee',
      artist: 'Larry June',
      album: 'Orange Print',
      id: 11,
    },
    {
      name: 'Purple Hearts',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 12,
    },
    {
      name: 'Gas Station Run',
      artist: 'Larry June',
      album: 'Orange Print',
      id: 13,
    },
    {
      name: 'Count Me Out',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 14,
    },
    {
      name: 'Still Boomin',
      artist: 'Larry June',
      album: 'Mr. Midnight',
      id: 15,
    },
    {
      name: 'Crown',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 16,
    },
  ]);

  const [playlist, setPlaylist] = useState([
    {
      name: 'Smoothies in 1991',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 1,
      isInPlaylist: true,
    },
    {
      name: 'N95',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 2,
      isInPlaylist: true,
    },
  ]);

  const [search, setSearch] = useState('');

  const [playlistName, setPlaylistName] = useState('My new Playlist');

  function handlePlaylistNameChange(e) {
    setPlaylistName(e.target.value);
  }
  function handleSearchBarChange(e) {
    setSearch(e.target.value);
  }

  function handleAddTrack(newTrack) {
    const trackIndexInPlaylist = playlist.findIndex(
      (track) => track.id === newTrack.id
    );

    if (trackIndexInPlaylist === -1) {
      setPlaylist((prevPlaylist) => [
        ...prevPlaylist,
        { ...newTrack, isInPlaylist: true },
      ]);
      setSongs((prevSongs) =>
        prevSongs.map((song) =>
          song.id === newTrack.id ? { ...song, isInPlaylist: true } : song
        )
      );
    } else {
      console.log('Track already exists in playlist');
    }
  }

  function handleRemoveTrack(trackToRemove) {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((track) => track.id !== trackToRemove.id)
    );
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === trackToRemove.id ? { ...song, isInPlaylist: false } : song
      )
    );
  }

  return (
    <div className={styles.gridContainer}>
      <h1 className={styles.title}>
        Playlist <span className={styles.titleHighlight}>Pro</span>
      </h1>
      <SearchBar
        handleSearchBarChange={handleSearchBarChange}
        search={search}
      />
      <SearchResults songs={songs} onAdd={handleAddTrack} />
      <PlaylistName
        handlePlaylistNameChange={handlePlaylistNameChange}
        playlistName={playlistName}
      />
      <Playlist playlist={playlist} onRemove={handleRemoveTrack} />
    </div>
  );
}

export default App;
