import { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  function handleUserInput(e) {
    setSearch(e.target.value);

  }
  return (
    <>
    <h2 className={styles.searchTitle}>Search</h2>
      <input className={styles.searchInput} id='search' type="text" onChange={handleUserInput} value={search}/>
    </>
  );
}
