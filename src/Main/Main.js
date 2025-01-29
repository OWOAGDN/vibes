import Tracklist from "./Tracklist/Tracklist";
import Playlist from "./Playlist/Playlist";
import DisplayPlaylist from "./DisplayPlaylist";
import styles from "./Main.module.css"
import { useEffect, useState } from 'react';

function Main( {results}) {

    const [playlists, setPlaylists] = useState([]);
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

    const addPlaylist = (playlist) => {
      const duplicateCheck = playlists.filter(p => p.id === playlist.id);
      if (duplicateCheck.length === 0) {
        setPlaylists((prev) => [...prev, playlist]);
      }
    }

    const resetPlaylist = () => {
      const forSpotify = playlistSongs.map(song => song.uri);
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
              playlists={playlists}
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