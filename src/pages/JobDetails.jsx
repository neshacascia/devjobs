import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';

export default function JobDetails(props) {
  const { jobId } = useParams();

  const thisJob = data.find(job => job.id === jobId);

  return (
    <main>
      <h1>Job Detail Page</h1>
      {/* {thisJob.company} */}
    </main>
  );
}
