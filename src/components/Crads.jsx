import React from "react";

const Crads = () => {
  return (
    <div className="flex gap-3 bg-[#18181a] p-8 mt-20 min-h-[50vh] justify-center items-center">
      {/* Left Card */}
      <div className="relative bg-[#232326] rounded-2xl p-10 h-[50vh] w-[30%] transition-all duration-300 hover:scale-101 hover:px-12 hover:shadow-xl hover:bg-[#404044]">
        <div className="font-semibold mb-4 text-lg">Up Next: News</div>
        <div className="text-3xl font-medium mb-8">
          Insights and behind
          <br />
          the scenes
        </div>
        <div className="text-gray-400 text-base">
          Explore what drives our team.
        </div>
        <span className="absolute top-6 right-6 text-2xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>

      {/* Right Card */}
      <div className="relative bg-[#232326] rounded-2xl p-10 h-[50vh] w-[70%] transition-all duration-300 hover:scale-101 hover:px-12 hover:shadow-xl hover:bg-purple-700 hover:text-white">
        <div className="font-semibold mb-4 text-lg">Get In Touch</div>
        <div className="text-3xl font-medium mb-8">
          Let's get to it, together.
        </div>
        <div className="text-[5rem] font-bold mb-8 leading-none">
          Start a Project
        </div>
        <button className="px-8 py-3 rounded-full border-none bg-purple-100 text-[#18181a] font-medium text-lg cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-purple-600 hover:scale-x-105">
          Contact us{" "}
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>
        <span className="absolute top-6 right-6 text-2xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </div>
  );
};

export default Crads;
