import React from 'react';

export default function Cards(props) {
  return (
    <div className="listing-card">
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

        <h2>{props.position}</h2>

        <span>{props.company}</span>

        <span className="job-location">{props.location}</span>
      </div>
    </div>
  );
}
