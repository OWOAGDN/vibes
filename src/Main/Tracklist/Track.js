function Track( {track, addPlaylistSongs}) {

  const handleClick = () => {
    addPlaylistSongs(track)
  }
    return (
    <li>
        <div>
          <p>Song: {track.name}</p>
          <p>Artist: {track.artist}</p>
        </div>
        <button onClick={handleClick}>+</button>
    </li>
    );
}

export default Track;