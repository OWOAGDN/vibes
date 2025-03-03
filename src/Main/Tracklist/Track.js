import styles from './Tracklist.module.css'

function Track( {track, addPlaylistSongs, type, deletePlaylistSong}) {

  const addSong = () => {
    addPlaylistSongs(track)
  }
  const deleteSong = () => {
    deletePlaylistSong(track.id)
  }
    return (
    <li className={styles.song}>
        <div className={styles.imageContainer} ><img src={track.image} alt={track.name}></img></div>
        <div className={styles.songContainer}>
          <p className={styles.trackName}>{track.name}</p>
          <p className={styles.artistName}>{track.artist}</p>
          <p className={styles.albumName}>{track.album}</p>
        </div>
        <div className={styles.buttonContainer}>{type === 'result' ? <button onClick={addSong}>+</button> : <button onClick={deleteSong}>-</button> }</div>
    </li>
    );
}

export default Track;