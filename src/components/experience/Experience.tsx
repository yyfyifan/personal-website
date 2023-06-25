"use client";

import { useState } from "react";
import type { TabName } from "./Tabs";
import Tabs from "./Tabs";
import ExperienceContent from "./ExperienceContent";
import { SectionHeader } from "../common";

const Experience = () => {
  const [tabName, setTabName] = useState<TabName>("work");

  return (
    <section
      id="experience"
      className="h-screen text-teal-600 dark:text-gray-200 flex flex-col justify-center items-center snap-start">
      <SectionHeader text="Experience" />

      <Tabs activeTab={tabName} setActiveTab={(name: TabName) => setTabName(name)} />

      <ExperienceContent tab={tabName} />
    </section>
  );
};
Experience.displayName = "Experience";
export default Experience;
