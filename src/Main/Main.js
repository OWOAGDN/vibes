import Tracklist from "./Tracklist/Tracklist";
import Playlist from "./Playlist/Playlist";
import styles from "./Main.module.css"

function Main() {
    return (
        <div className={styles.main}>
            <Tracklist />
            <Playlist />
        </div>
    );
}

export default Main;