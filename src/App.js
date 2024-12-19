import './App.css';
import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar';
import Playlist from './Playlist/Playlist';
import SearchResults from './SearchResults/SearchResults';
import Tracklist from './Tracklist/Tracklist';

function App() {
  const [result, setResult] = useState([
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
    <div className="App">
      <header className="">
        <h1>R&B Vibes</h1>
      </header>
      <main>
        <SearchBar />
        <div className="PlayArea">
          <SearchResults result={result} />
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
