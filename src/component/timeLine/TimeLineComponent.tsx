import { Role } from "../constant";

const TimeLineComponent = (props: Role) => {
  const { duration, employmentType, position, skills } = props;
  return (
    <div className="flex items-start">
      <div className="flex flex-col justify-center items-center p-2">
        <div className="circle rounded-full ml-[4px] "></div>
        <div className="rod ml-1 mt-2"></div>
      </div>
      <div className="flex flex-col mt-1">
        <span>{position}</span>
        <span> {employmentType}</span>
        <span>{duration}</span>
        <strong className="mt-5">{skills?.join(", ")}</strong>
      </div>
    </div>
  );
};

export default TimeLineComponent;
