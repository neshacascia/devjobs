import { createContext, useState } from 'react';

import data from '../../data.json';

const Context = createContext();

function ContextProvider(props) {
  const [formData, setFormData] = useState({
    searchInput: '',
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

  return (
    <Context.Provider
      value={{
        formData,
        handleChange,
        filteredJobs,
        submitHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
