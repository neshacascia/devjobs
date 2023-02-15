export default function Details(props) {
  const requirementsList = props.thisJob.requirements.items.map(item => (
    <li className="text-purple font-bold pl-8 mb-2 ml-4">
      <span
        className={`${props.theme ? 'text-grayDark' : 'text-gray'} font-light`}
      >
        {item}
      </span>
    </li>
  ));

  const roleList = props.thisJob.role.items.map(item => (
    <li className="text-purple font-bold pl-8 mb-2 ml-4">
      <span
        className={`${props.theme ? 'text-grayDark' : 'text-gray'} font-light`}
      >
        {item}
      </span>
    </li>
  ));

  return (
    <section
      className={`${
        props.theme ? 'bg-dark' : 'bg-white'
      } w-full rounded-md px-6 pt-10 mb-16 md:px-12`}
    >
      <div className="font-light w-full flex flex-col mb-8 md:flex-row md:justify-between md:items-center md:mb-0">
        <div className="mb-14">
          <div className="text-gray flex gap-4 pb-2">
            <p>{props.thisJob.postedAt}</p>
            <p className="font-bold">•</p>
            <p>{props.thisJob.contract}</p>
          </div>

          <h1
            className={`${
              props.theme ? 'text-white' : 'text-dark'
            } font-bold text-xl pb-2`}
          >
            {props.thisJob.position}
          </h1>

          <span className="text-purple font-bold">
            {props.thisJob.location}
          </span>
        </div>

        <a
          className="text-white bg-purple font-bold text-center w-full rounded-md py-3.5 px-12 hover:bg-buttonHover md:w-fit md:h-fit"
          href={props.thisJob.apply}
        >
          Apply Now
        </a>
      </div>

      <div
        className={`font-light ${props.theme ? 'text-grayDark' : 'text-gray'}`}
      >
        <p className="mb-10">{props.thisJob.description}</p>

        <h3
          className={`${
            props.theme ? 'text-white' : 'text-dark'
          } text-xl font-bold mb-7`}
        >
          Requirements
        </h3>

        <p className="mb-8">{props.thisJob.requirements.content}</p>

        <ul className="list-disc mb-10">{requirementsList}</ul>

        <h3
          className={`${
            props.theme ? 'text-white' : 'text-dark'
          } text-xl font-bold mb-7`}
        >
          What You Will Do
        </h3>

        <p className="mb-8">{props.thisJob.role.content}</p>

        <ol className="list-decimal mb-10">{roleList}</ol>
      </div>
    </section>
  );
}
