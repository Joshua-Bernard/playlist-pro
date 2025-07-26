import PropTypes from 'prop-types';

import Track from '../Track/Track';
export default function Tracklist({ songs, onAdd, onRemove }) {
  return (
    <>
      {songs.map((song, index) => (
        <Track song={song} key={index} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </>
  );
}

Tracklist.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album: PropTypes.string,
      id: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};
