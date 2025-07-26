import styles from './SavePlaylist.module.css';

export default function SavePlaylist({ savePlaylist }) {
  return <button className={styles.saveButton} onClick={savePlaylist}>Save Playlist</button>;
}
