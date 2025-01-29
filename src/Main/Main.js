import Tracklist from "./Tracklist/Tracklist";
import Playlist from "./Playlist/Playlist";
import DisplayPlaylist from "./DisplayPlaylist";
import styles from "./Main.module.css"
import { useState } from 'react';

function Main( {results}) {

    const [playlistSongs, setPlaylistSongs] = useState([]);
    

    const addPlaylistSongs = (song) => {
      const duplicateCheck = playlistSongs.filter(s => s.id === song.id);
      if (duplicateCheck.length === 0) {
        setPlaylistSongs((prev) => [...prev, song]);
      }
    };

    const deletePlaylistSong = (songId) => {
      setPlaylistSongs((playlistSongs) => playlistSongs.filter(song => song.id !== songId));
    };

    const addPlaylist = (name) => {
      let playlistName = name;
      console.log(playlistName)
      const forSpotify = playlistSongs.map(song => song.uri);
      console.log(forSpotify)
    }

    const resetPlaylist = () => {
      setPlaylistSongs(() => []);
    }    

    return (
      <>
        <div className={styles.main}>
            <Tracklist 
              tracks={results} 
              addPlaylistSongs={addPlaylistSongs} />
            <Playlist 
              playlistSongs={playlistSongs} 
              deletePlaylistSong={deletePlaylistSong} 
              addPlaylist={addPlaylist}
              resetPlaylist={resetPlaylist} />
        </div>
        <div>
          <DisplayPlaylist />
        </div>
      </>

    );
}

export default Main;