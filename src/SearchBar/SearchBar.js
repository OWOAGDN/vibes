import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar( {showResults} ) {
  const [term, setTerm] = useState('')
  const handleTextChange = (event) => {
    setTerm(() => event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    showResults(term);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Find Some Riddims"
        key="search"
        onChange={handleTextChange}
        />
        <img src=""></img>
        <button 
        type="submit"
        >Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
 