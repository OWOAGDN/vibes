import styles from './Tracklist/Tracklist.module.css';
import React, {useState} from 'react';

function Tracklist() {
  const [song, setSong] = useState([])

  const addSong = (song) => {
    setSong((prev) => [...prev, song])
  }
  return (
    <div className={styles.container}>
        <ul>
            <Track addSong={addSong} />
        </ul>
        <button>Save To Spotify</button>
    </div>
  );
}

export default Tracklist;
