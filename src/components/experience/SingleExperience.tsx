import React from "react";

export interface SingleExperienceProps {
  logo?: string;
  companyName: string;
  start: string;
  end: string;
  jobTitle: string;
  location: string;
}

const SingleExperience: React.FC<SingleExperienceProps> = (props) => {
  const { logo, companyName, start, end, jobTitle, location } = props;

  return (
    <div className="w-full flex flex-col">
      {/* First row */}
      <div className="flex justify-between">
        {/* Left */}
        <div className="flex items-center gap-2">
          {logo && <img src={logo} className="h-3" />}
          <span>{companyName}</span>
        </div>
        {/* Right */}
        <div>
          <span>{start}</span>
          <span> - </span>
          <span>{end}</span>
        </div>
      </div>
      {/* Second row */}
      <div className="flex justify-between">
        <div>{jobTitle}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};
SingleExperience.displayName = "SingleExperience";
export default SingleExperience;
