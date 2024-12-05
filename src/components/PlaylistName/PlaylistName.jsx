import { useState } from 'react';
import styles from './PlaylistName.module.css';

export default function PlaylistName() {
  const [playlistName, setPlaylistName] = useState('My new Playlist');
  function handleUserInput(e) {
    setPlaylistName(e.target.value);
  }
  return (
    <>
      <h2 className={styles.playlistTitle}>Playlist Name</h2>
      <input
        className={styles.playlistName}
        id="playlistName"
        type="text"
        onChange={handleUserInput}
        value={playlistName}
      />
    </>
  );
}
