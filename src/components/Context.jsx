import { createContext, useState } from 'react';

import data from '../../data.json';

const Context = createContext();

function ContextProvider(props) {
  const [formData, setFormData] = useState({
    searchInput: '',
    locationInput: '',
    isFullTime: false,
  });

  function handleChange(e) {
    const { name, checked, type, value } = e.target;

    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  const filteredJobs = data.filter(
    job =>
      job.position.toLowerCase().includes(formData.searchInput.toLowerCase()) ||
      job.company.toLowerCase().includes(formData.searchInput.toLowerCase())
  );

  const filteredLocations = data.filter(job =>
    job.location.toLowerCase().includes(formData.locationInput.toLowerCase())
  );

  const filteredContracts = data.filter(job => job.contract === 'Full Time');

  return (
    <Context.Provider
      value={{
        formData,
        handleChange,
        filteredJobs,
        filteredLocations,
        filteredContracts,
        submitHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
