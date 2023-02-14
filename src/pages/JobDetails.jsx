import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

import data from '../../data.json';

export default function JobDetails(props) {
  const { jobId } = useParams();

  const thisJob = data.find(job => job.id === jobId);

  return (
    <>
      <Navbar handleClick={props.handleClick} />
      <main
        className={`${
          props.theme ? 'bg-bodyDark' : 'bg-body'
        } font-display flex flex-col items-center`}
      >
        <section className="flex flex-col items-center gap-6 px-6 md:px-10 xl:w-desktop">
          <div
            className={`${
              props.theme ? 'bg-dark' : 'bg-white'
            } w-full h-card flex flex-col items-center relative bottom-5 rounded-md md:h-banner md:flex-row md:items-center md:gap-10  lg:bottom-8`}
          >
            <img
              className="w-logo h-logo relative bottom-6 object-scale-down rounded-2xl md:w-logoTablet md:h-full md:max-w-auto md:bottom-0 md:rounded-logo"
              style={{ backgroundColor: thisJob.logoBackground }}
              src={thisJob.logo}
            />
            <div className="flex flex-col items-center md:items-start md:mr-auto">
              <h2
                className={`${
                  props.theme ? 'text-white' : 'text-dark'
                } text-xl font-bold mb-3`}
              >
                {thisJob.company}
              </h2>
              <p className="text-gray text-base mb-7 md:mb-0">
                {thisJob.website.slice(20) + '.com'}
              </p>
            </div>

            <a
              className={`button ${
                props.theme
                  ? 'bg-buttonDark text-white hover:bg-buttonDarkHover'
                  : 'bg-button text-purple hover:bg-buttonHover'
              } font-bold text-center rounded-md p-button md:mr-10`}
              href={thisJob.website}
            >
              Company Site
            </a>
          </div>

          <section
            className={`${
              props.theme ? 'bg-dark' : 'bg-white'
            } w-full rounded-md px-6 pt-10 mb-16 md:px-12`}
          >
            <div className="font-light w-full flex flex-col mb-8 md:flex-row md:justify-between md:items-center md:mb-0">
              <div className="mb-14">
                <div className="text-gray flex gap-4 pb-2">
                  <p>{thisJob.postedAt}</p>
                  <p className="font-bold">•</p>
                  <p>{thisJob.contract}</p>
                </div>
                <h1
                  className={`${
                    props.theme ? 'text-white' : 'text-dark'
                  } font-bold text-xl pb-2`}
                >
                  {thisJob.position}
                </h1>
                <span className="text-purple font-bold">
                  {thisJob.location}
                </span>
              </div>

              <a
                className="text-white bg-purple font-bold text-center w-full rounded-md py-3.5 px-12 hover:bg-buttonHover md:w-fit md:h-fit"
                href={thisJob.apply}
              >
                Apply Now
              </a>
            </div>

            <div
              className={`font-light ${
                props.theme ? 'text-grayDark' : 'text-gray'
              }`}
            >
              <p className="mb-10">{thisJob.description}</p>

              <h3
                className={`${
                  props.theme ? 'text-white' : 'text-dark'
                } text-xl font-bold mb-7`}
              >
                Requirements
              </h3>
              <p className="mb-8">{thisJob.requirements.content}</p>

              <ul className="list-disc mb-10">
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.requirements.items[0]}
                  </span>
                </li>
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.requirements.items[1]}
                  </span>
                </li>
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.requirements.items[2]}
                  </span>
                </li>
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.requirements.items[3]}
                  </span>
                </li>
              </ul>

              <h3
                className={`${
                  props.theme ? 'text-white' : 'text-dark'
                } text-xl font-bold mb-7`}
              >
                What You Will Do
              </h3>
              <p className="mb-8">{thisJob.role.content}</p>
              <ol className="list-decimal mb-10">
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.role.items[0]}
                  </span>
                </li>
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.role.items[1]}
                  </span>
                </li>
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.role.items[2]}
                  </span>
                </li>
                <li className="text-purple font-bold pl-8 mb-2 ml-4">
                  <span
                    className={`${
                      props.theme ? 'text-grayDark' : 'text-gray'
                    } font-light`}
                  >
                    {thisJob.role.items[3]}
                  </span>
                </li>
              </ol>
            </div>
          </section>
        </section>

        <footer
          className={`${
            props.theme ? 'bg-dark' : 'bg-white'
          } w-screen h-footer flex justify-center items-center px-6 md:justify-between md:px-10 xl:p-desktop`}
        >
          <div className="hidden md:flex md:flex-col">
            <h4
              className={`${
                props.theme ? 'text-white' : 'text-dark'
              } font-bold text-xl`}
            >
              {thisJob.position}
            </h4>
            <p className="text-gray font-light">{thisJob.company}</p>
          </div>

          <a
            className="text-white bg-purple font-bold text-center w-full rounded-md py-3.5 px-12 md:w-fit hover:bg-buttonHover"
            href={thisJob.apply}
          >
            Apply Now
          </a>
        </footer>
      </main>
    </>
  );
}
