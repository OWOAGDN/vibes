import Tracklist from "./Tracklist/Tracklist";
import Playlist from "./Playlist/Playlist";
import DisplayPlaylist from "./DisplayPlaylist";
import styles from "./Main.module.css"
import { useState } from 'react';

function Main( {tracks}) {
    const [results, setResults] = useState([
        {
          name: "On & On",
          artist: "Flo",
          album: "Access All Areas",
          id: 0
        },
        {
          name: "Walk Like This",
          artist: "Flo",
          album: "Access All Areas",
          id: 1
        },
        {
          name: "I'm Just a Girl",
          artist: "Flo",
          album: "Access All Areas",
          id: 2
        }
      ]);
    
    const [playlistSongs, setPlaylistSongs] = useState([

    ]);

    const addPlaylistSongs = (song) => {
      const duplicateCheck = playlistSongs.filter(s => s.id === song.id);
      if (duplicateCheck.length === 0) {
        setPlaylistSongs((prev) => [...prev, song]);
      } 
    };

    const deletePlaylistSong = (songId) => {
      setPlaylistSongs((playlistSongs) => playlistSongs.filter(song => song.id !== songId));
    };

    return (
      <>
        <div className={styles.main}>
            <Tracklist tracks={results} addPlaylistSongs={addPlaylistSongs} />
            <Playlist playlistSongs={playlistSongs} deletePlaylistSong={deletePlaylistSong} />
            {}
        </div>
        <div>
          <DisplayPlaylist />
        </div>
      </>

    );
}

export default Main;