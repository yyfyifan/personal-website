import React from "react";

const TerminalWindow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-md overflow-hidden max-w-3xl mx-auto">
      <div className="flex justify-start gap-2 py-2 pl-3 bg-gray-800">
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FF605C" }}></div>
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FFBD44" }}></div>
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#00CA4E" }}></div>
      </div>
      <div
        className="px-3 py-2 bg-gray-500
                    text-center font-mono text-xl text-gray-200">
        {children}
      </div>
    </div>
  );
};
TerminalWindow.displayName = "TerminalWindow";
export default TerminalWindow;
