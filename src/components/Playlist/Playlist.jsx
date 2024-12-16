import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';
import PropTypes from 'prop-types';

export default function Playlist({ playlist }) {
  return (
    <>
      <div className={styles.container}>
        <Tracklist songs={playlist} />
      </div>
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
};
