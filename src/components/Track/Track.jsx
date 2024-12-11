import PropTypes from 'prop-types';
import styles from './Track.module.css';
export default function Track({ song }) {
  return (
    <>
      <div className={styles.Track}>
        <div className={styles.TrackInfo}>
          <p>{song.name}</p>
          <p>{song.artist}</p>
        </div>
        <div className={styles.trackButtonContainer}>
          <input className={styles.trackButton} type="button" value={song.isInPlaylist ? "-" : "+"} />

        </div>
        <hr></hr>
      </div>
    </>
  );
}

Track.propTypes = {
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string,
    isInPlaylist: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};
