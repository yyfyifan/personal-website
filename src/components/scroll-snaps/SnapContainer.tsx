import React from "react";
import classNames from "classnames";

interface SnapContainerProps {
  className?: string;
  children: React.ReactNode;
}
const SnapContainer: React.FC<SnapContainerProps> = ({ className, children }) => {
  return (
    <div className={classNames("overflow-y-scroll scroll-smooth snap-mandatory snap-y", className)}>
      {children}
    </div>
  );
};
SnapContainer.displayName = "SnapContainer";
export default SnapContainer;
