import PropTypes from 'prop-types';
export default function Track({ song }) {
  return (
    <>
      <div className="track">
        <p>{song.name}</p>
        <p>{song.artist}</p>
      </div>
    </>
  );
}

Track.propTypes = {
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
