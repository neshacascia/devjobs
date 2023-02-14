import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  return (
    <div
      className={`${
        props.theme ? 'bg-dark' : 'bg-white'
      } min-w-card h-card relative rounded-md md:w-card`}
    >
      <div
        className="w-logo h-logo flex flex-col justify-center items-center absolute -top-5 rounded-2xl ml-6"
        style={{ backgroundColor: props.background }}
      >
        <img className="object-contain" src={props.logo} />
      </div>

      <div className="flex flex-col justify-center p-card">
        <div className="text-gray text-base font-normal flex gap-3 mb-3">
          <span>{props.postedAt}</span>
          <span className="font-bold">•</span>
          <span>{props.contract}</span>
        </div>

        <Link
          to={props.id}
          className={`${
            props.theme ? 'text-white' : 'text-dark'
          } hover:text-gray`}
        >
          <h2 className="text-xl font-bold mb-3">{props.position}</h2>
        </Link>

        <span className="text-gray">{props.company}</span>

        <span className="text-purple text-sm font-bold mt-8">
          {props.location}
        </span>
      </div>
    </div>
  );
}
