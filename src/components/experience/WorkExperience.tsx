import classNames from "classnames";
import { ImLocation2, ImCalendar } from "react-icons/im";

export interface WorkExperienceProps {
  logo?: string;
  companyName: string;
  start: string;
  end: string;
  jobTitle: string;
  location: string;
}

const MobileItem: React.FC<WorkExperienceProps> = (props) => {
  const { logo, companyName, start, end, jobTitle, location } = props;

  return (
    <div className={classNames("sm:hidden")}>
      {/* First row: company logo + name */}
      <div
        className={classNames("flex justify-start items-center gap-2", "font-bold text-md", {
          "text-lg": companyName.length <= 10,
        })}>
        {logo && <img src={logo} className="h-3" />}
        <span>{companyName}</span>
      </div>
      {/* Second row: job title */}
      <div>{jobTitle}</div>
      {/* Third row: work date span */}
      <div className="flex items-center gap-3">
        <ImCalendar className="w-3" />
        <div className="text-gray-400">
          <span>{start}</span>
          <span> - </span>
          <span>{end}</span>
        </div>
      </div>
      {/* Fourth row: location */}
      <div className="flex items-center gap-3">
        <ImLocation2 className="w-3" />
        <div className="text-gray-400">{location}</div>
      </div>
    </div>
  );
};

const DesktopItem: React.FC<WorkExperienceProps> = (props) => {
  const { logo, companyName, start, end, jobTitle, location } = props;

  return (
    <div className={"hidden sm:block"}>
      {/* First row: company name and location */}
      <div className="flex justify-between items-center gap-32">
        {/* Left */}
        <div className="flex items-center gap-2 font-bold">
          {logo && <img src={logo} className="h-3" />}
          <span>{companyName}</span>
        </div>
        {/* Right */}
        <div>{location}</div>
      </div>
      {/* Second row: job title and date span */}
      <div className="flex justify-between items-center">
        <div>{jobTitle}</div>
        <div>
          <span>{start}</span>
          <span> - </span>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
};

const WorkExperience: React.FC<WorkExperienceProps> = (props) => {
  return (
    <div>
      {/* Using two components for different viewpoint size is eaiser
        to layout than with media-query CSS */}
      <DesktopItem {...props} />
      <MobileItem {...props} />
    </div>
  );
};
WorkExperience.displayName = "WorkExperience";
export default WorkExperience;
