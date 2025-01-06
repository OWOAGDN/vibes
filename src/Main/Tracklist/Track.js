function Track( {track, addPlaylistSongs, type, deletePlaylistSong}) {

  const addSong = () => {
    addPlaylistSongs(track)
  }
  const deleteSong = () => {
    deletePlaylistSong(track.id)
  }
    return (
    <li>
        <div>
          <p>Song: {track.name}</p>
          <p>Artist: {track.artist}</p>
        </div>
        {type === 'result' ? <button onClick={addSong}>+</button> : <button onClick={deleteSong}>-</button> } 
    </li>
    );
}

export default Track;