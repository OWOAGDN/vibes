import PlaylistTracks from "./PlaylistTracks";
import styles from "../Main.module.css"

function Playlist( {playlistSongs} ) {
    return (
        <div className={styles.playlist}>
            <div>
                <h1>Create Playlist</h1>
            </div>
            <div>
                <p>{playlistSongs.length === 0 ? '' : playlistSongs[0].name}</p>
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