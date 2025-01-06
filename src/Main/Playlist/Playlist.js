import PlaylistTracks from "./PlaylistTracks";
import styles from "../Main.module.css"
import Track from "../Tracklist/Track";
import { useState } from "react";

function Playlist( {playlistSongs, deletePlaylistSong, addPlaylist} ) {

    const [playlistName, setPlaylistName] = useState('');
    const handleChange = ({target}) => {
        const value = target.value;
        setPlaylistName(() => value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }


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
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name Your Playlist!"
                        value={playlistName}
                        onChange={handleChange}></input>
                    <div>
                        <button
                            type="submit"
                            > Save to Spotify</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Playlist;