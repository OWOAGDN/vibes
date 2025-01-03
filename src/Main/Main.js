import Tracklist from "./Tracklist/Tracklist";
import Playlist from "./Playlist/Playlist";
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



    return (
        <div className={styles.main}>
            <Tracklist tracks={results} />
            <Playlist />
        </div>
    );
}

export default Main;