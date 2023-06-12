import React from "react";
import classNames from "classnames";
import { BsFillMortarboardFill, BsBriefcaseFill } from "react-icons/bs";

export type TabName = "work" | "education";

interface TabsProps {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { activeTab, setActiveTab } = props;
  return (
    <div
      className="flex items-center justify-center gap-10
      text-2xl
    ">
      <div
        onClick={() => setActiveTab("work")}
        className={classNames(
          "cursor-pointer flex items-center gap-2",
          "dark:hover:text-pinkred",
          "transition-colors duration-150",
          { "dark:text-pinkred": activeTab === "work" }
        )}>
        <BsBriefcaseFill />
        <span>Work</span>
      </div>
      <div
        onClick={() => setActiveTab("education")}
        className={classNames(
          "cursor-pointer flex items-center gap-2",
          "dark:hover:text-pinkred",
          "transition-colors duration-150",
          { "dark:text-pinkred": activeTab === "education" }
        )}>
        <BsFillMortarboardFill />
        <span>Education</span>
      </div>
    </div>
  );
};
Tabs.displayName = "Tabs";
export default Tabs;
