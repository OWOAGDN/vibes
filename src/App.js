import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Playlist from './Playlist/Playlist';
import SearchResults from './SearchResults/SearchResults';
import Tracklist from './Tracklist/Tracklist';

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>R&B Vibes</h1>
      </header>
      <main>
        <SearchBar />
        <div className="PlayArea">
          <SearchResults />
          <div className="ListArea">
          <Playlist />
          <Tracklist />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
