import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.container}>
      <form>
        <input 
        type="text"
        placeholder="Search"
        key="search"
        />
        <img src=""></img>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
