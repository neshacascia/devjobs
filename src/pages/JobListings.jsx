import React from 'react';
import Cards from '../components/Cards';

import data from '../../data.json';

export default function JobListings(props) {
  const cardsArr = data.map(job => (
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

  return <main>{cardsArr}</main>;
}