import styles from './Tracklist.module.css'
import Track from './Track'

function Tracklist( {tracks} ) {
    return (
        <div className={styles.main}>
            <h1>Hello Aswell</h1>
            <ul className={styles.songs} >
            {tracks.map(track => (
            <Track key={track.id} track={track} />
        ))}
            </ul>
        
        </div>
    );
}

export default Tracklist;