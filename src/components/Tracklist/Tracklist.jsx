import PropTypes from 'prop-types';

import Track from '../Track/Track';
export default function Tracklist({ songs }) {
  return (
    <>
      <h3>Hello Tracklist!</h3>
      {songs.map((song, index) => (
        <Track song={song} key={index} />
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
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
