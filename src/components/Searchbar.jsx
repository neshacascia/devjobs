import React, { useContext } from 'react';
import { Context } from './context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

import searchIcon from '../assets/desktop/icon-search.svg';
import locationIcon from '../assets/desktop/icon-location.svg';

export default function Searchbar(props) {
  const {
    formData,
    searchInputHandler,
    locationInputHandler,
    contractHandler,
    submitHandler,
    openModal,
  } = useContext(Context);

  return (
    <div
      className={`font-display h-20 flex justify-between items-center relative bottom-10 rounded-md px-6 mx-6 md:mx-30 xl:mx-40 ${
        props.theme ? 'bg-dark' : 'bg-white'
      }`}
    >
      <div className="w-2/5 h-full flex items-center flex-initial md:border-r-line border-lightGray md:mr-6 gap-4">
        <img className="hidden md:block" src={searchIcon} />
        <input
          type="text"
          placeholder="Filter by title..."
          value={formData.searchInput}
          name="searchInput"
          onChange={searchInputHandler}
          className={`${
            props.theme ? 'bg-dark text-white' : 'bg-white'
          } focus:outline-none w-full`}
        />
      </div>

      <div className="hidden w-1/3 h-full md:flex items-center flex-initial gap-4">
        <img className="location-icon" src={locationIcon} />
        <input
          type="text"
          placeholder="Filter by location..."
          value={formData.locationInput}
          name="locationInput"
          onChange={locationInputHandler}
          className={`${
            props.theme ? 'bg-dark text-white' : 'bg-white'
          } focus:outline-none w-full`}
        />
      </div>

      <div className="hidden h-full md:flex items-center md:border-l-line border-lightGray">
        <input
          className="w-checkbox h-checkbox rounded-sm mr-4 md:ml-6"
          type="checkbox"
          name="isFullTime"
          id="isFullTime"
          checked={formData.isFullTime}
          onChange={contractHandler}
        />
        <label
          htmlFor="isFullTime"
          className={`${
            props.theme ? 'text-white' : 'text-dark'
          } font-bold mr-6`}
        >
          Full Time
        </label>

        <button
          className="hidden text-white bg-purple font-bold rounded-md md:flex py-4 px-9"
          onClick={submitHandler}
        >
          Search
        </button>
      </div>

      <div className="flex gap-6">
        <button className="md:hidden" onClick={openModal}>
          <FontAwesomeIcon
            icon={faFilter}
            className={`${props.theme ? 'text-white' : 'text-gray'} text-lg`}
          ></FontAwesomeIcon>
        </button>

        <button
          className="bg-purple flex rounded-md"
          type="submit"
          onClick={submitHandler}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="text-white p-3.5 md:hidden"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
