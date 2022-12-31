import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';

export default function JobDetails(props) {
  const { jobId } = useParams();

  const thisJob = data.find(job => job.id === jobId);

  return (
    <main className="job-details-page">
      <section className={`container ${props.theme ? 'dark' : ''}`}>
        <div className="banner">
          <img
            className="company-logo"
            style={{ backgroundColor: thisJob.logoBackground }}
            src={thisJob.logo}
          />
          <div className="text">
            <h2>{thisJob.company}</h2>
            <p>{thisJob.website.slice(20) + '.com'}</p>
          </div>

          <a className="button" href={thisJob.website}>
            Company Site
          </a>
        </div>

        <section className="job-details">
          <div className="top">
            <div className="left">
              <div className="page-info">
                <p>{thisJob.postedAt}</p>
                <p>•</p>
                <p>{thisJob.contract}</p>
              </div>
              <h1>{thisJob.position}</h1>
              <span className="page-location">{thisJob.location}</span>
            </div>

            <a className="apply" href={thisJob.apply}>
              Apply Now
            </a>
          </div>

          <div className="page-description">
            <p>{thisJob.description}</p>

            <h3>Requirements</h3>
            <p>{thisJob.requirements.content}</p>

            <ul className="items">
              <li>
                <span>{thisJob.requirements.items[0]}</span>
              </li>
              <li>
                <span>{thisJob.requirements.items[1]}</span>
              </li>
              <li>
                <span>{thisJob.requirements.items[2]}</span>
              </li>
              <li>
                <span>{thisJob.requirements.items[3]}</span>
              </li>
            </ul>

            <h3>What You Will Do</h3>
            <p>{thisJob.role.content}</p>
            <ol className="items">
              <li>
                <span>{thisJob.role.items[0]}</span>
              </li>
              <li>
                <span>{thisJob.role.items[1]}</span>
              </li>
              <li>
                <span>{thisJob.role.items[2]}</span>
              </li>
              <li>
                <span>{thisJob.role.items[3]}</span>
              </li>
            </ol>
          </div>
        </section>
      </section>

      <footer className={props.theme ? 'dark' : ''}>
        <div className="footer-left">
          <h4>{thisJob.position}</h4>
          <p>{thisJob.company}</p>
        </div>

        <a className="apply" href={thisJob.apply}>
          Apply Now
        </a>
      </footer>
    </main>
  );
}
