function Track( {track, addPlaylistSongs, type}) {

  const handleClick = () => {
    addPlaylistSongs(track)
  }
    return (
    <li>
        <div>
          <p>Song: {track.name}</p>
          <p>Artist: {track.artist}</p>
        </div>
        {type === 'result' ? <button onClick={handleClick}>+</button> : '' } 
    </li>
    );
}

export default Track;