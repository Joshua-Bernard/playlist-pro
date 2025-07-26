import PropTypes from 'prop-types';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';
export default function SearchResults({ searchResults, onAdd }) {
  const songsWithNewKey = searchResults.map((searchResult) => ({
    ...searchResult,
    isInPlaylist: false,
  }));

  return (
    <div className={styles.container}>
      <Tracklist songs={songsWithNewKey} onAdd={onAdd} />
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album: PropTypes.string,
      id: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
};
