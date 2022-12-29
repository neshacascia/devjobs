import React, { useState } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Cards from './components/Cards';

import data from '../data.json';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(prevState => !prevState);
  }

  const cardsArr = data.map(job => (
    <Cards
      key={job.id}
      logo={job.logo}
      background={job.logoBackground}
      postedAt={job.postedAt}
      contract={job.contract}
      position={job.position}
      company={job.company}
      location={job.location}
      theme={isDarkMode}
    />
  ));

  return (
    <div className={`app ${!isDarkMode ? '' : 'dark'}`}>
      <Navbar handleClick={toggleDarkMode} />
      <Searchbar theme={isDarkMode} />
      <main>{cardsArr}</main>
    </div>
  );
}

export default App;
