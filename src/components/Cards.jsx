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

      <div className="job-details">
        <div className="duration">
          <span>{props.postedAt}</span>
          <span>•</span>
          <span>{props.contract}</span>
        </div>

        <h2 className={!props.theme ? '' : 'dark'}>
          <Link to={props.id}>{props.position}</Link>
        </h2>

        <span>{props.company}</span>

        <span className="job-location">{props.location}</span>
      </div>
    </div>
  );
}
