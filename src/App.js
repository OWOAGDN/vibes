import './App.css';
import SearchBar from './SearchBar/SearchBar.js'
import Main from './Main/Main.js';
import SpotifyLogin from './SpotifyLogin/SpotifyLogin.js'
import { useEffect, useState } from 'react';
import SpotifyLogo from './Images/Spotify_Primary_Logo_RGB_Green.png'


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
        window.history.pushState({}, null, '/');
      }, params.expires_in *1000);
    }
  }, [accessToken])

  const spotifyLogin = () => {
    if(!accessToken) {
      getAuthorization();
    }
  }

  const getResults = (term) => {
    return fetch(`https://api.spotify.com/v1/search?q=${term}+genre:r&b&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse) {
        console.log('nothing')
      } else {
        console.log(jsonResponse)
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      };
    });
  }

  const [results, setResults] = useState([])

  const showResults = (term) => {
    if (!accessToken) {
      spotifyLogin();
    }
    if (!term) {
      setResults(() => [])
    } else {
      getResults(term).then(result => setResults(result))
    }
  } 
/*
  const showResults = (term) => {
    getResults(term).then(setResults);
  } */

  return (
    <div className="App">
      <header className="App-header">
        <div className='Heading'>
          <h1>R&B Vibes
            
          </h1>
          <div className="Logo">
            <img src={SpotifyLogo} alt='Spotify Logo'/>
          </div>
          <span className='Spotify'>Powered by Spotify</span>
        </div>
      </header>
      <SpotifyLogin spotifyLogin={spotifyLogin} token={accessToken} />
      <SearchBar showResults={showResults} />
      <Main results={results} token={accessToken} />
    </div>
  );
}

export default App;
