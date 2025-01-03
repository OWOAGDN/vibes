import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js'
import Main from './Main/Main.js';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>R&B Vibes</h1>
      </header>
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
