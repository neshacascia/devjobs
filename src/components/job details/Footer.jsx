export default function Footer(props) {
  return (
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
          {props.thisJob.position}
        </h4>
        <p className="text-gray font-light">{props.thisJob.company}</p>
      </div>

      <a
        className="text-white bg-purple font-bold text-center w-full rounded-md py-3.5 px-12 md:w-fit hover:bg-buttonHover"
        href={props.thisJob.apply}
      >
        Apply Now
      </a>
    </footer>
  );
}
