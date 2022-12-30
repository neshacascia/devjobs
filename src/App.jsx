import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import JobListings from './pages/JobListings';
// import Cards from './components/Cards';
import JobDetails from './pages/JobDetails';

// import data from '../data.json';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <div className={`app ${!isDarkMode ? '' : 'dark'}`}>
      <Navbar handleClick={toggleDarkMode} />
      <Searchbar theme={isDarkMode} />
      {/* <main>{cardsArr}</main> */}
      <Routes>
        <Route
          exact
          path="/"
          element={<JobListings theme={isDarkMode} />}
        ></Route>
        <Route path="/:jobId" element={<JobDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
