import React, { useContext } from 'react';
import { Context } from '../components/context/Context';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/job details/Banner';
import Details from '../components/job details/Details';
import Footer from '../components/job details/Footer';

export default function JobDetails(props) {
  const { jobId } = useParams();
  const { jobs } = useContext(Context);

  const thisJob = jobs.find(job => job.id === jobId);

  return (
    <>
      <Navbar handleClick={props.handleClick} />
      <main
        className={`${
          props.theme ? 'bg-bodyDark' : 'bg-body'
        } font-display flex flex-col items-center`}
      >
        <section className="flex flex-col items-center gap-6 px-6 md:px-10 xl:w-desktop">
          <Banner thisJob={thisJob} theme={props.theme} />
          <Details thisJob={thisJob} theme={props.theme} />
        </section>

        <Footer thisJob={thisJob} theme={props.theme} />
      </main>
    </>
  );
}
