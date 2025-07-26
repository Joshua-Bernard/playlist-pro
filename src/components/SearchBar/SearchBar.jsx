import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

export default function SearchBar({ searchQuery, handleSearchBarChange }) {
  return (
    <>
      <h2 className={styles.searchTitle}>Search</h2>
      <div className={styles.searchInputContainer}>
        <input
          className={styles.searchInput}
          id="search"
          type="text"
          onChange={handleSearchBarChange}
          value={searchQuery}
        />
        <svg
          className={styles.searchIcon}
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5061 17.364L28.1127 27.9706M18.2132 3.92893C22.1184 7.83418 22.1184 14.1658 18.2132 18.0711C14.308 21.9763 7.97631 21.9763 4.07107 18.0711C0.165825 14.1658 0.165825 7.83418 4.07107 3.92893C7.97631 0.0236893 14.308 0.0236893 18.2132 3.92893Z"
            stroke="#40DD8F"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  handleSearchBarChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
