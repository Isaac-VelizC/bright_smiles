import React from "react";

const Preloader: React.FC = () => {
  return (
    <div
      id="preloader"
      className="fixed flex flex-wrap justify-center items-center z-[500] h-screen w-full"
    >
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-4xl animate-spin flex items-center justify-center border-t-secondary rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-2xl animate-spin flex items-center justify-center border-t-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
