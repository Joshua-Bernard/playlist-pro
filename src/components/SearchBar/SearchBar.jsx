import { useState } from "react";
export default function SearchBar() {
  const [search, setSearch] = useState('');
  function handleUserInput(e) {
    setSearch(e.target.value);

  }
  return (
    <>
    <h2>Search</h2>
      <input  id='search' type="text" onChange={handleUserInput} value={search}/>
    </>
  );
}


import SearchBar from './components/SearchBar/SearchBar';
<SearchBar />