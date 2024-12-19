import Track from "../Track/Track";

function SearchResults( {results} ) {
  return (
    <div>
        <ul>
            {results.map(result => (
                <Track 
                key={result.id}
                track={result} />
            ))}
        </ul>
    </div>
  );
}

export default SearchResults;
