import { useState } from "react";
import type { TabName } from "./Tabs";
import Tabs from "./Tabs";
import ExperienceContent from "./ExperienceContent";

const Experience = () => {
  const [tabName, setTabName] = useState<TabName>("work");

  return (
    <section
      id="experience"
      className="h-screen text-teal-600 dark:text-gray-200 flex flex-col justify-center items-center snap-start">
      <h2 className="text-5xl text-center mb-16 border-b-4 border-pinkred">Experience</h2>

      <Tabs activeTab={tabName} setActiveTab={(name: TabName) => setTabName(name)} />
      {/* Gap between the tab and content */}
      <div className="h-10"></div>
      <ExperienceContent tab={tabName} />
    </section>
  );
};
Experience.displayName = "Experience";
export default Experience;
