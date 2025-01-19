import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js'
import Main from './Main/Main.js';
import SpotifyLogin from './SpotifyLogin.js'
import { useEffect, useState } from 'react';


function App() {

  const [accessToken, setAccessToken] = useState('');
  const client_id = '5d2f1950ffd44e209aa696a484f2c0ba';
  const redirect_uri = 'http://localhost:3000/';
  let state = 'qwertyhgfdcvbnyf';
  
  const getAuthorization = () => {
    var scope = 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    window.location = url;
  }

  const getHashParams = () => {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  useEffect(()=> {
    const params = getHashParams();
    if (params) {
      setAccessToken(() => params.access_token);
      console.log(params.access_token)
      window.setTimeout(() => {
        setAccessToken(() => '');
      }, params.expires_in *1000);
    }
  }, [])

  const spotifyLogin = () => {
    if(!accessToken) {
      getAuthorization();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>R&B Vibes</h1>
      </header>
      <SpotifyLogin spotifyLogin={spotifyLogin} token={accessToken} />
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
