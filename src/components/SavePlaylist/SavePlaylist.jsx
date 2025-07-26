import styles from './SavePlaylist.module.css';
import PropTypes from 'prop-types';


export default function SavePlaylist({ savePlaylist }) {
  return <button className={styles.saveButton} onClick={savePlaylist}>Save Playlist</button>;
}

SavePlaylist.propTypes = {
  savePlaylist: PropTypes.func.isRequired,
};
