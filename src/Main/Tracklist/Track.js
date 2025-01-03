function Track( {track}) {
    return (
    <li>
        <div>
          <p>Song: {track.name}</p>
          <p>Artist: {track.artist}</p>
        </div>
        <button>+</button>
    </li>
    );
}

export default Track;