import PropTypes from 'prop-types';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';
export default function SearchResults({ songs }) {
  return (
    <div className={styles.container}>
      <Tracklist songs={songs} />
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
};
