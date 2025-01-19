function SpotifyLogin( {spotifyLogin, token} ) {
    const handleClick = () => {
        spotifyLogin();
    }
    if (!token) {
        return (
            <div>
                <button
                value="Login to Spotify"
                onClick={handleClick}>
                    Login to Spotify
                 </button>
            </div>
        )
    } else {
        return (
            <div>
                Logged In!
            </div>
        )
    }

}

export default SpotifyLogin;