import logo from './logo.svg';
import styles from './SearchBar/SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.container}>
      <form>
        <input 
        type="text"
        placeholder="Search"
        key="search"
        value={}>
          <img src=""></img>
        </input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
