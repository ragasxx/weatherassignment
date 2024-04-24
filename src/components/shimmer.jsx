import React from "react";

const Shimmer = () => {
  return (
    <div className=" w-[280px] h-[170px] sm:w-[500px] sm:h-[250px] bg-slate-700 shadow-lg rounded-xl px-6 mt-[100px] animate-pulse">
      <div className="sm:p-6 p-4">
        <h2 className="bg-gray-400 animate-pulse sm:h-4 w-1/4 h-2 mb-2"></h2>
        <h1 className="w-3/4 h-3 sm:w-1/2 mb-4 sm:h-6 animate-pulse bg-gray-500"></h1>
        <p className="leading-relaxed mb-3 w-full h-2 sm:h-6 animate-pulse bg-gray-400"></p>
        <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
        <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
        <div className="flex items-center flex-wrap ">
          <a className="bg-gray-300 sm:h-4 h-2 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
          <span className="bg-gray-300 w-16 mt-2 h-2 sm:h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
