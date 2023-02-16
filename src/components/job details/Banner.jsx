import { Link } from 'react-router-dom';

export default function Banner(props) {
  return (
    <div
      className={`${
        props.theme ? 'bg-dark' : 'bg-white'
      } w-full h-card flex flex-col items-center relative bottom-5 rounded-md md:h-banner md:flex-row md:items-center md:gap-10  lg:bottom-8`}
    >
      <img
        className="w-logo h-logo relative bottom-6 object-scale-down rounded-2xl md:w-logoTablet md:h-full md:max-w-auto md:bottom-0 md:rounded-logo"
        style={{ backgroundColor: props.thisJob.logoBackground }}
        src={props.thisJob.logo}
      />
      <div className="flex flex-col items-center md:items-start md:mr-auto">
        <h2
          className={`${
            props.theme ? 'text-white' : 'text-dark'
          } text-xl font-bold mb-3`}
        >
          {props.thisJob.company}
        </h2>
        <p className="text-gray text-base mb-7 md:mb-0">
          {props.thisJob.website.slice(20) + '.com'}
        </p>
      </div>

      <Link
        className={`button ${
          props.theme
            ? 'bg-buttonDark text-white hover:bg-buttonDarkHover'
            : 'bg-button text-purple hover:bg-buttonHover'
        } font-bold text-center rounded-md p-button md:mr-10`}
        to="#"
      >
        Company Site
      </Link>
    </div>
  );
}
