import Styles from './SpotifyLogin.module.css'

function SpotifyLogin( {spotifyLogin, token} ) {
    const handleClick = () => {
        spotifyLogin();
    }
    if (!token) {
        return (
            <div className={Styles.loginContainer}>
                <button
                className={Styles.loginButton}
                value="Login to Spotify"
                onClick={handleClick}>
                    Login to Spotify
                 </button>
            </div>
        )
    } else {
        return (
            <div className={Styles.loginContainer}>
                <button
                className={Styles.loggedin}
                >Logged In!</button>
            </div>
        )
    }

}

export default SpotifyLogin;