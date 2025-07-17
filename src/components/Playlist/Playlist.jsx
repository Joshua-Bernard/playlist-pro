import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';
import PropTypes from 'prop-types';
import SavePlaylist from '../SavePlaylist/SavePlaylist';

export default function Playlist({ playlist, onRemove }) {
  return (
    <>
      <div className={styles.container}>
        <Tracklist songs={playlist} onRemove={onRemove} />
      </div>
      <SavePlaylist />
    </>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album: PropTypes.string,
      id: PropTypes.number.isRequired,
      isInPlaylist: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};
