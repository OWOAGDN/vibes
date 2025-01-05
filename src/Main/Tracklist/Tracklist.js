import styles from './Tracklist.module.css'
import Track from './Track'

function Tracklist( {tracks, addPlaylistSongs} ) {
    return (
        <div className={styles.main}>
            <h1>Results</h1>
            <ul className={styles.songs} >
            {tracks.map(track => (
            <Track 
                key={track.id} track={track} 
                addPlaylistSongs={addPlaylistSongs} />
        ))}
            </ul>
        
        </div>
    );
}

export default Tracklist;