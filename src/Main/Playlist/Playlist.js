import PlaylistTracks from "./PlaylistTracks";
import styles from "../Main.module.css"

function Playlist() {
    return (
        <div className={styles.playlist}>
            <div>
                <h1>Songs Here</h1>
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