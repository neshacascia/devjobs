import { createContext, useState } from 'react';

import data from '../../data.json';

const Context = createContext();

function ContextProvider(props) {
  const [formData, setFormData] = useState({
    searchInput: '',
    locationInput: '',
    isFullTime: '',
  });

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function searchInputHandler(e) {
    const { value } = e.target;

    setFormData(prevState => {
      return {
        ...prevState,
        searchInput: value,
      };
    });
  }

  function locationInputHandler(e) {
    const { value } = e.target;

    setFormData(prevState => {
      return {
        ...prevState,
        locationInput: value,
      };
    });
  }

  function contractHandler(e) {
    const { checked } = e.target;

    setFormData(prevState => {
      return {
        ...prevState,
        isFullTime: checked ? 'Full time' : '',
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsSubmitted(true);

    setFilteredJobs(
      data
        .filter(
          job =>
            job.position
              .toLowerCase()
              .includes(formData.searchInput.toLowerCase()) ||
            job.company
              .toLowerCase()
              .includes(formData.searchInput.toLowerCase())
        )
        .filter(job =>
          job.location
            .toLowerCase()
            .includes(formData.locationInput.toLowerCase())
        )
    );
  }

  return (
    <Context.Provider
      value={{
        formData,
        isSubmitted,
        searchInputHandler,
        locationInputHandler,
        contractHandler,
        submitHandler,
        filteredJobs,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
