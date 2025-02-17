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
        <div className={styles.songContainer}>
          <p>Song: {track.name}</p>
          <p>Artist: {track.artist}</p>
          <p>Album: {track.album}</p>
          <div className={styles.imageContainer} ><img src={track.image} alt={track.name}></img></div>
        </div>
        {type === 'result' ? <button onClick={addSong}>+</button> : <button onClick={deleteSong}>-</button> } 
    </li>
    );
}

export default Track;