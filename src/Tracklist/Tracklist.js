import styles from './Tracklist/Tracklist.module.css';

function Tracklist() {
  return (
    <div className={styles.container}>
        <ul>
            <Track />
        </ul>
        <button>Save To Spotify</button>
    </div>
  );
}

export default Tracklist;
