import classNames from "classnames";
import GoogleLogo from "../../assets/google.png";
import YahooShortLogo from "../../assets/yahoo-short.png";
import ColumbiaLogo from "../../assets/columbia-university-white.png";
import ManchesterLogo from "../../assets/manchester-university.png";
import NCEPULogo from "../../assets/ncepu-white.png";
import UCLLogo from "../../assets/ucl.png";
import type { WorkExperienceProps } from "./WorkExperience";
import type { EducationExperienceProps } from "./EducationExperience";
import WorkExperience from "./WorkExperience";
import EducationExperience from "./EducationExperience";
import type { TabName } from "./Tabs";

const works: Array<WorkExperienceProps> = [
  {
    logo: YahooShortLogo,
    companyName: "Yahoo",
    start: "May 2023",
    end: "Present",
    jobTitle: "Sr. Software Engineer",
    location: "Mountain View, CA",
  },
  {
    logo: GoogleLogo,
    companyName: "Google",
    start: "July 2020",
    end: "Jan 2023",
    jobTitle: "Software Engineer",
    location: "Sunnyvale, CA",
  },
  {
    companyName: "Changsha Commerce & Tourism College",
    start: "Sep 2018",
    end: "Dec 2018",
    jobTitle: "Lecturer",
    location: "Changsha, China",
  },
  {
    companyName: "PowerChina Zhongnan Eng. Co., Ltd",
    start: "Jan 2016",
    end: "Jan 2018",
    jobTitle: "Software Engineer",
    location: "Changsha, China",
  },
];

const educations: Array<EducationExperienceProps> = [
  {
    logo: ColumbiaLogo,
    school: "Columbia University",
    degree: "Master of Science in Computer Science",
    start: "Jan 2019",
    end: "May 2020",
    location: "New York, NY",
  },
  {
    logo: UCLLogo,
    school: "University College London",
    degree: "Master of Science in Wireless and Optical Communications",
    start: "Sep 2014",
    end: "Nov 2015",
    location: "London, United Kingdom",
  },
  {
    logo: ManchesterLogo,
    school: "The University of Manchester",
    degree: "Bachelor of Engineering in Electrical and Electronic Engineering",
    start: "Sep 2012",
    end: "Jun 2014",
    location: "Manchester, United Kingdom",
  },
  {
    logo: NCEPULogo,
    school: "North China Electric Power Univ.",
    degree: "Bachelor of Engineering in Electrical and Electronic Engineering",
    start: "Sep 2010",
    end: "Jun 2012",
    location: "Beijing, China",
  },
];

interface ExperienceContentProps {
  tab: TabName;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({ tab }) => {
  return (
    <ul className={classNames("flex flex-col justify-center items-stretch", "px-12 gap-10")}>
      {tab === "work"
        ? works.map((exp) => (
            <li key={exp.start}>
              <WorkExperience {...exp} />
            </li>
          ))
        : educations.map((exp) => (
            <li key={exp.start}>
              <EducationExperience {...exp} />
            </li>
          ))}
    </ul>
  );
};
ExperienceContent.displayName = "ExperienceContent";
export default ExperienceContent;
