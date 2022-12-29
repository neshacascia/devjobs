import React from 'react';
import searchIcon from '../assets/desktop/icon-search.svg';
import locationIcon from '../assets/desktop/icon-location.svg';

export default function Searchbar() {
  return (
    <form className="searchbar-container">
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>

      <div className="location-bar">
        <img className="location-icon" src={locationIcon} />
        <input type="text" placeholder="Filter by location..." />
      </div>

      <div className="submit">
        <input className="checkbox" type="checkbox" id="isFullTime" />
        <label htmlFor="isFullTime">Full Time Only</label>
        <button className="search">Search</button>
      </div>
    </form>
  );
}
