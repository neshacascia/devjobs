import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Cards from './components/Cards';

import data from '../data.json';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState);
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
    />
  ));

  return (
    <div className="app">
      <Navbar handleClick={toggleDarkMode} />
      <Searchbar />
      <main>{cardsArr}</main>
    </div>
  );
}

export default App;
