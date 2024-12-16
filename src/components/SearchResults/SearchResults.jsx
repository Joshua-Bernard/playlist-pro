import PropTypes from 'prop-types';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';
export default function SearchResults({ songs, onAdd }) {
  const songsWithNewKey = songs.map((song) => ({
    ...song,
    isInPlaylist: false,
  }));

  console.log(songsWithNewKey);

  return (
    <div className={styles.container}>
      <Tracklist songs={songsWithNewKey} onAdd={onAdd} />
    </div>
  );
}

SearchResults.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
};
