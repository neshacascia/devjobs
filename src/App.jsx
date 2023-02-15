import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import { Context } from './components/Context';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import FilterModal from './components/modal/FilterModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { isModalOpen } = useContext(Context);

  function toggleDarkMode() {
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <div className={`${isDarkMode ? 'bg-bodyDark' : 'bg-body'}`}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home handleClick={toggleDarkMode} theme={isDarkMode} />}
        ></Route>
        <Route
          path="/:jobId"
          element={
            <JobDetails handleClick={toggleDarkMode} theme={isDarkMode} />
          }
        ></Route>
      </Routes>

      {isModalOpen &&
        ReactDOM.createPortal(
          <FilterModal theme={isDarkMode} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
}

export default App;
