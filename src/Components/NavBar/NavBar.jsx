import React, { useState, useEffect } from "react";
import logo from "./svce-logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTranslucent, setIsTranslucent] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsTranslucent(true);
      } else {
        setIsTranslucent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 px-6 flex justify-between items-center transition-all duration-300 ${
        isTranslucent
          ? "bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-md"
          : "bg-transparent"
      } z-10`}
    >
      <div className="font-bold text-xl lg:text-3xl flex items-center">
        <span className="w-10 h-10 mr-2 flex items-center">
          <img src={logo} alt="SVCE Logo" />
        </span>
        <span className="glow">
          <span className="text-blue-500">SVCE</span>{" "}
          <span className="text-white">Bengaluru</span>
        </span>
      </div>
      <button
        className="text-gray-600 focus:outline-none md:hidden"
        onClick={toggleNav}
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
        >
          {isNavOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
      <ul
        className={`md:flex md:items-center md:space-x-8 w-full md:w-auto ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a
            href="#"
            className="text-gray-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300 text-lg"
          >
            Who We Are
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300 text-lg"
          >
            Campus &amp; City
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300 text-lg"
          >
            Academic Life
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300 text-lg"
          >
            Research
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-100 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300 text-lg"
          >
            Admissions &amp; Aid
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
