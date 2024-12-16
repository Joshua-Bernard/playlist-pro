import PropTypes from 'prop-types';
import styles from './PlaylistName.module.css';

export default function PlaylistName({
  handlePlaylistNameChange,
  playlistName,
}) {
  return (
    <>
      <h2 className={styles.playlistTitle}>Playlist Name</h2>
      <input
        className={styles.playlistName}
        id="playlistName"
        type="text"
        onChange={handlePlaylistNameChange}
        value={playlistName}
      />
    </>
  );
}

PlaylistName.propTypes = {
  handlePlaylistNameChange: PropTypes.func.isRequired,
  playlistName: PropTypes.string.isRequired,
};
