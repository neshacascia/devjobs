import { useContext } from 'react';
import { Context } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import locationIcon from '../../assets/desktop/icon-location.svg';

export default function FilterModal(props) {
  const {
    formData,
    locationInputHandler,
    contractHandler,
    submitHandler,
    closeModal,
  } = useContext(Context);

  return (
    <div className="bg-modal w-screen h-screen flex justify-center items-center fixed z-10">
      <div
        className={`${
          props.theme ? 'bg-dark' : 'bg-white'
        } font-display w-searchInput flex flex-col relative rounded-md`}
      >
        <button onClick={closeModal} className="absolute right-0 pt-4 px-6">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-purple text-xl font-bold"
          ></FontAwesomeIcon>
        </button>

        <div className="flex pt-8 pb-6 pl-6">
          <img className="mr-4" src={locationIcon} />
          <input
            type="text"
            placeholder="Filter by location..."
            value={formData.locationInput}
            name="locationInput"
            onChange={locationInputHandler}
            className={`${
              props.theme ? 'bg-dark text-white' : 'bg-white'
            } focus:outline-none`}
          />
        </div>

        <hr className="text-lightGray" />

        <div className="flex items-center py-6 pl-6">
          <input
            className="bg-checkbox w-checkbox h-checkbox rounded-sm mr-4"
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
        </div>

        <button
          type="submit"
          className="bg-purple text-white font-bold w-auto rounded-md py-4 px-9 mx-6 mb-6"
          onClick={submitHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
}
