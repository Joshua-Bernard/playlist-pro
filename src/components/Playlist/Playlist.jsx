import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';
import PropTypes from 'prop-types';
import SavePlaylist from '../SavePlaylist/SavePlaylist';

export default function Playlist({ playlistTracks, onRemove, savePlaylist }) {
  return (
    <>
      <div className={styles.container}>
        <Tracklist songs={playlistTracks} onRemove={onRemove} />
      </div>
      <SavePlaylist savePlaylist={savePlaylist}/>
    </>
  );
}

Playlist.propTypes = {
  playlistTracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album: PropTypes.string,
      id: PropTypes.string.isRequired,
      isInPlaylist: PropTypes.bool.isRequired,
      uri: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  savePlaylist: PropTypes.func.isRequired,
};
