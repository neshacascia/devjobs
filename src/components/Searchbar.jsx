import React, { useContext } from 'react';
import { Context } from './Context';
import searchIcon from '../assets/desktop/icon-search.svg';
import locationIcon from '../assets/desktop/icon-location.svg';

export default function Searchbar(props) {
  const {
    formData,
    searchInputHandler,
    locationInputHandler,
    contractHandler,
    submitHandler,
  } = useContext(Context);

  return (
    <form
      className={`searchbar-container ${props.theme ? 'dark' : ''}`}
      onSubmit={submitHandler}
    >
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          value={formData.searchInput}
          name="searchInput"
          onChange={searchInputHandler}
        />
      </div>

      <div className="location-bar">
        <img className="location-icon" src={locationIcon} />
        <input
          type="text"
          placeholder="Filter by location..."
          value={formData.locationInput}
          name="locationInput"
          onChange={locationInputHandler}
        />
      </div>

      <div className="submit">
        <input
          className="checkbox"
          type="checkbox"
          name="isFullTime"
          id="isFullTime"
          checked={formData.isFullTime}
          onChange={contractHandler}
        />
        <label htmlFor="isFullTime">Full Time Only</label>
        <button className="search">Search</button>
      </div>
    </form>
  );
}
