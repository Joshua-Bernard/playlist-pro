import PropTypes from 'prop-types';
import styles from './Track.module.css';
export default function Track({ song, onAdd, onRemove  }) {
  return (
    <>
      <div className={styles.Track}>
        <div className={styles.TrackInfo}>
          <p>{song.name}</p>
          <p className={styles.artist}>{song.artist}</p>
        </div>
        <div className={styles.trackButtonContainer}>
          <input
            className={`${styles.trackButton} ${
              song.isInPlaylist ? styles.trackRemove : styles.trackAdd
            }`}
            type="button"
            value={song.isInPlaylist ? '-' : '+'}
            onClick={() => (song.isInPlaylist ? onRemove(song) : onAdd(song))}

          />
        </div>
      </div>
      <hr />
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
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
