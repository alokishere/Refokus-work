import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#18181a] px-12 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Logo */}
        <div className="flex-1">
          <span className="text-white text-[8vw] font-bold leading-none select-none">refokus.</span>
        </div>

        {/* Socials & Sitemap */}
        <div className="flex flex-1 gap-24 justify-end">
          {/* Socials */}
          <div>
            <div className="text-gray-300 mb-4 font-medium">Socials</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter (X?)</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
          {/* Sitemap */}
          <div>
            <div className="text-gray-300 mb-4 font-medium">Sitemap</div>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Work</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Description & Button */}
        <div className="flex-1 flex flex-col items-end">
          <div className="text-white text-right font-medium mb-4 mt-10 max-w-xs">
            Refokus is a pioneering digital agency driven by design and empowered by technology.
          </div>
          <button className="bg-[#4f46e5] text-white px-6 py-2 rounded-md font-semibold mt-5 flex items-center gap-2 hover:bg-[#6c63ff] transition">
            <span className="text-white italic px-2 text-2xl font-bold">W</span>
            Enterprise Partner
          </button>
        </div>
      </div>
      {/* Bottom links */}
      <div className="flex gap-8 mt-10 text-gray-400 text-base">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Cookie Policy</a>
        <a href="#" className="hover:text-white transition">Impressum</a>
        <a href="#" className="hover:text-white transition">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
//