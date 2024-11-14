import PropTypes from 'prop-types';

import Tracklist from '../Tracklist/Tracklist';
export default function SearchResults({ songs }) {
  return (
    <>
      <h2>Hello Search results</h2>
      <Tracklist songs={songs} />
    </>
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
