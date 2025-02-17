import Track from './Track';
import styles from "../Main.module.css";

function Tracklist( {tracks, addPlaylistSongs} ) {
    return (
        <div className={styles.resultBox}>
            <h1>Results</h1>
            <ul className={styles.songs} >
            {tracks.map(track => (
            <Track 
                key={track.id} 
                track={track} 
                addPlaylistSongs={addPlaylistSongs}
                type='result' />
        ))}
            </ul>
        
        </div>
    );
}

export default Tracklist;