import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  return (
    <div className={`listing-card ${!props.theme ? '' : 'dark'}`}>
      <div
        className="job-logo-container"
        style={{ backgroundColor: props.background }}
      >
        <img className="job-logo" src={props.logo} />
      </div>

      <div className="job-details-card">
        <div className="duration">
          <span>{props.postedAt}</span>
          <span>•</span>
          <span>{props.contract}</span>
        </div>

        <h2>
          <Link to={props.id} className={!props.theme ? '' : 'dark'}>
            {props.position}
          </Link>
        </h2>

        <span>{props.company}</span>

        <span className="job-location">{props.location}</span>
      </div>
    </div>
  );
}
