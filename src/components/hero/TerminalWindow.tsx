import React from "react";

const TerminalWindow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="text-sm w-full max-w-lg mx-auto
        rounded-md overflow-hidden">
      <div className="flex justify-start gap-2 py-2 pl-3 bg-gray-800">
        <div className="h-3 w-3 rounded-full bg-[#FF605C]"></div>
        <div className="h-3 w-3 rounded-full bg-[#FFBD44]"></div>
        <div className="h-3 w-3 rounded-full bg-[#00CA4E]"></div>
      </div>
      <div
        className="px-3 py-2 min-h-[44px] bg-gray-500 text-sm sm:text-xl
                    text-center font-mono text-yellow-500">
        {children}
      </div>
    </div>
  );
};
TerminalWindow.displayName = "TerminalWindow";
export default TerminalWindow;
