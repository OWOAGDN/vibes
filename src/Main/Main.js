import Tracklist from "./Tracklist/Tracklist";
import Playlist from "./Playlist/Playlist";
import DisplayPlaylist from "./DisplayPlaylist";
import styles from "./Main.module.css";
import { useState } from 'react';

function Main( {results, token}) {

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
      const uriArray = playlistSongs.map(song => song.uri);
      console.log(uriArray)
      saveToSpotify(uriArray, playlistName)
    }

    const saveToSpotify =  (uri, playlistName) => {
      return fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        return response.json()
      }).then(jsonResponse => {
        return jsonResponse.id
      }).then(userId => {
        console.log(userId)
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'POST',
          body: JSON.stringify({
            name: playlistName,
            description: 'Made from Vibes',
            public: true
          })
        })
      }).then(response => {
        return response.json()
      }).then(jsonResponse => {
        const userId = jsonResponse.owner.id
        const playlistId = jsonResponse.id
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'POST',
          body: JSON.stringify({uris: uri})
        })
      }).then(response => {
        console.log(response)
      })
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