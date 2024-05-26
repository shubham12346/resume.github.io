// import indexnine_logo from "../assets/indexnine_technologies_logo.jpeg";
import { CompanyDetails } from "./constant";
import TimeLineComponent from "./timeLine/TimeLineComponent";

const Timeline = (CompanyDetails: CompanyDetails) => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-start">
        <div className="mr-3 mt-[6px]">
          <img
            src={CompanyDetails.logo}
            height={"50rem"}
            width={"50rem"}
            alt="company-logo"
          />
        </div>
        <div className="flex flex-col">
          <span>{CompanyDetails.companyName}</span>
          <span>{CompanyDetails.experience} </span>
          <span>{CompanyDetails.workType}</span>
        </div>
      </div>

      {CompanyDetails?.roles?.map((role, index) => (
        <TimeLineComponent
          duration={role.duration}
          employmentType={role.employmentType}
          position={role.position}
          skills={role.skills}
          key={index}
        />
      ))}
    </div>
  );
};

export default Timeline;
