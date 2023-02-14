import React, { useContext } from 'react';
import { Context } from '../components/Context';
import Header from '../components/Header';
import Cards from '../components/Cards';

import data from '../../data.json';

export default function Home(props) {
  const { isSubmitted, filteredJobs } = useContext(Context);

  const cardsArr = isSubmitted
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
    : data.map(job => (
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
    <main className="h-full">
      <Header handleClick={props.handleClick} theme={props.theme} />
      <main className="font-display h-full flex flex-col gap-10 px-6 pb-8 md:flex-row md:flex-wrap md:justify-center md:gap-y-16 md:pt-11">
        {!cardsArr.length ? (
          <p className={`${props.theme ? 'text-gray' : 'text-dark'}`}>
            No job(s) matched search.
          </p>
        ) : (
          cardsArr
        )}
      </main>
    </main>
  );
}
