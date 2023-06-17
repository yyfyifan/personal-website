import React from "react";
import classNames from "classnames";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <h2
      className={classNames(
        "text-2xl sm:text-5xl text-center",
        "mb-4 sm:mb-16 border-b-4 border-pinkred"
      )}>
      {text}
    </h2>
  );
};
SectionHeader.displayName = "SectionHeader";
export default SectionHeader;
