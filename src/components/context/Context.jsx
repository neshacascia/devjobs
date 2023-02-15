import { useEffect } from 'react';
import { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider(props) {
  const [formData, setFormData] = useState({
    searchInput: '',
    locationInput: '',
    isFullTime: '',
  });

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch(
        'https://devjobs-66e59-default-rtdb.firebaseio.com/.json'
      );
      const data = await res.json();

      setJobs(data);
    }
    fetchJobs();
  }, []);

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
        isFullTime: checked ? 'Full Time' : '',
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsSubmitted(true);

    setIsModalOpen(false);

    setFilteredJobs(
      jobs
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
        .filter(job => {
          return job.contract.includes(formData.isFullTime);
        })
    );
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Context.Provider
      value={{
        formData,
        isSubmitted,
        isModalOpen,
        jobs,
        filteredJobs,
        searchInputHandler,
        locationInputHandler,
        contractHandler,
        submitHandler,
        openModal,
        closeModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
