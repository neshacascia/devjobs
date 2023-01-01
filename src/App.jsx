import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <div className={`app ${!isDarkMode ? '' : 'dark'}`}>
      <Navbar handleClick={toggleDarkMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={<JobListings theme={isDarkMode} />}
        ></Route>
        <Route
          path="/:jobId"
          element={<JobDetails theme={isDarkMode} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
