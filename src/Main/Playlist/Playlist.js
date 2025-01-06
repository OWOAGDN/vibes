import PlaylistTracks from "./PlaylistTracks";
import styles from "../Main.module.css"
import Track from "../Tracklist/Track";

function Playlist( {playlistSongs, deletePlaylistSong} ) {
    return (
        <div className={styles.playlist}>
            <div>
                <h1>Create Playlist</h1>
            </div>
            <div>
                <ul>
                {playlistSongs.length === 0 ? ('') : (
                    playlistSongs.map(track => (
                        <Track 
                            key={track.id} 
                            track={track}
                            deletePlaylistSong={deletePlaylistSong}
                            type='playlist' />
                    )))}
                    </ul>
            </div>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Name Your Playlist!"></input>
                    <div>
                        <button>Save to Spotify</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Playlist;