import React, { useContext } from 'react';
import { Context } from '../components/Context';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';

import data from '../../data.json';

export default function JobListings(props) {
  const { formData, filteredJobs, filteredLocations, filteredContracts } =
    useContext(Context);

  const cardsArr = formData.searchInput
    ? filteredJobs.map(job => (
        <Cards
          key={job.id}
          id={job.id}
          logo={job.logo}
          background={job.logoBackground}
          postedAt={job.postedAt}
          contract={job.contract}
          position={job.position}
          company={job.company}
          location={job.location}
          theme={props.theme}
        />
      ))
    : formData.isFullTime
    ? filteredContracts.map(job => (
        <Cards
          key={job.id}
          id={job.id}
          logo={job.logo}
          background={job.logoBackground}
          postedAt={job.postedAt}
          contract={job.contract}
          position={job.position}
          company={job.company}
          location={job.location}
          theme={props.theme}
        />
      ))
    : filteredLocations.map(job => (
        <Cards
          key={job.id}
          id={job.id}
          logo={job.logo}
          background={job.logoBackground}
          postedAt={job.postedAt}
          contract={job.contract}
          position={job.position}
          company={job.company}
          location={job.location}
          theme={props.theme}
        />
      ));

  return (
    <>
      <Searchbar theme={props.theme} />
      <main className="job-listings">
        {!cardsArr.length ? <p>No job(s) matched search</p> : cardsArr}
      </main>
      ;
    </>
  );
}
