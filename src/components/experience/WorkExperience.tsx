import { Element } from "react-scroll";
import SingleExperience from "./SingleExperience";
import GoogleLogo from "../../assets/google.png";
import YahooLogo from "../../assets/yahoo.png";
import type { SingleExperienceProps } from "./SingleExperience";

const experiences: Array<SingleExperienceProps> = [
  {
    logo: YahooLogo,
    companyName: "Yahoo",
    start: "May 2023",
    end: "Present",
    jobTitle: "Sr. Software Engineer",
    location: "Remote",
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
    companyName: "PowerChina Zhongnan Engineering Co., Ltd",
    start: "Jan 2016",
    end: "Jan 2018",
    jobTitle: "Software Engineer",
    location: "Changsha, China",
  },
];

const WorkExperience = () => {
  return (
    <Element
      as="section"
      name="experience"
      className="h-screen bg-pink-500
          flex flex-col justify-center items-center">
      <h2>Title</h2>
      <ul className="w-full max-w-[500px] gap-2 flex flex-col justify-center items-stretch">
        {experiences.map((exp) => (
          <li key={exp.start}>
            <SingleExperience
              logo={exp.logo}
              companyName={exp.companyName}
              start={exp.start}
              end={exp.end}
              jobTitle={exp.jobTitle}
              location={exp.location}
            />
          </li>
        ))}
      </ul>
    </Element>
  );
};
WorkExperience.displayName = "WorkExperience";
export default WorkExperience;
