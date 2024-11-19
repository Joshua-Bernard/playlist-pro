
import styles from './Playlist.module.css';

export default function Playlist() {
    return (<>
        <h1 className={styles.playlistTitle}>Playlist title</h1>
        <h1 className={styles.playlistNameInput}>Playlist name input</h1>
        <div className={styles.container}>
            Acctual playlist
        </div>
    </>
    )
}