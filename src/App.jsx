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
      isInPlaylist: false,
    },
    {
      name: 'N95',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 2,
      isInPlaylist: false,
    },
    {
      name: "Don't Check Me",
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 3,
      isInPlaylist: false,
    },
    {
      name: 'United in Grief',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 4,
      isInPlaylist: false,
    },
    {
      name: 'Organic Fatherhood',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 5,
      isInPlaylist: false,
    },
    {
      name: 'Father Time',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 6,
      isInPlaylist: false,
    },
    {
      name: '6am in Sausalito',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 7,
      isInPlaylist: false,
    },
    {
      name: 'Rich Spirit',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 8,
      isInPlaylist: false,
    },
    {
      name: 'Private Valet',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 9,
      isInPlaylist: false,
    },
    {
      name: 'We Cry Together',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 10,
      isInPlaylist: false,
    },
    {
      name: 'Iced Coffee',
      artist: 'Larry June',
      album: 'Orange Print',
      id: 11,
      isInPlaylist: false,
    },
    {
      name: 'Purple Hearts',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 12,
      isInPlaylist: false,
    },
    {
      name: 'Gas Station Run',
      artist: 'Larry June',
      album: 'Orange Print',
      id: 13,
      isInPlaylist: false,
    },
    {
      name: 'Count Me Out',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 14,
      isInPlaylist: false,
    },
    {
      name: 'Still Boomin',
      artist: 'Larry June',
      album: 'Mr. Midnight',
      id: 15,
      isInPlaylist: false,
    },
    {
      name: 'Crown',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 16,
      isInPlaylist: false,
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

  return (
    <div className={styles.gridContainer}>
      <h1 className={styles.title}>
        Playlist <span className={styles.titleHighlight}>Pro</span>
      </h1>
      <SearchBar handleSearchBarChange={handleSearchBarChange} search={search}/>
      <SearchResults songs={songs} />
      <PlaylistName
        handlePlaylistNameChange={handlePlaylistNameChange}
        playlistName={playlistName}
      />
      <Playlist playlist={playlist} />
    </div>
  );
}

export default App;
