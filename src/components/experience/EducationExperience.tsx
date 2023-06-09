import classNames from "classnames";
import React from "react";
import { ImLocation2, ImCalendar } from "react-icons/im";
import { StaticImageData } from "next/image";
import OrganizationLogo from "./OrganizationLogo";

export interface EducationExperienceProps {
  logo?: StaticImageData;
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
}

const MobileItem: React.FC<EducationExperienceProps> = (props) => {
  const { logo, school, degree, start, end, location } = props;
  return (
    <div className="sm:hidden text-sm">
      {/* First row: school */}
      <div className={classNames("flex justify-start items-center gap-2", "font-bold")}>
        {logo && <OrganizationLogo name={school} src={logo} />}
        <span>{school}</span>
      </div>
      {/* Second row: degree */}
      <div>{degree}</div>
      {/* Third row: date span */}
      <div className="flex items-center gap-3 text-sm">
        <ImCalendar className="w-3" />
        <div className="text-gray-400">
          <span>{start}</span>
          <span> - </span>
          <span>{end}</span>
        </div>
      </div>
      {/* Fourth row: location */}
      <div className="flex items-center gap-3 text-sm">
        <ImLocation2 className="w-3" />
        <div className="text-gray-400">{location}</div>
      </div>
    </div>
  );
};

const DesktopItem: React.FC<EducationExperienceProps> = (props) => {
  const { logo, school, degree, start, end, location } = props;
  return (
    <div className={"hidden sm:block text-lg"}>
      {/* First row: school name and location */}
      <div className="flex justify-between items-center gap-32">
        {/* Left */}
        <div className="flex items-center gap-2 font-bold">
          {logo && <OrganizationLogo name={school} src={logo} />}
          <span>{school}</span>
        </div>
        {/* Right */}
        <div>{location}</div>
      </div>
      {/* Second row: degree and date span */}
      <div className="flex justify-between items-center gap-32">
        <div>{degree}</div>
        <div>
          <span>{start}</span>
          <span> - </span>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
};

const EducationExperience: React.FC<EducationExperienceProps> = (props) => {
  return (
    <div>
      {/* Using two components for different viewpoint size is eaiser
    to layout than with media-query CSS */}
      <DesktopItem {...props} />
      <MobileItem {...props} />
    </div>
  );
};
EducationExperience.displayName = "EducationExperience";
export default EducationExperience;
