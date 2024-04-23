import React, { useState, useEffect, useRef } from "react";
import logo from "./svce-logo.png";
import toggleIconOpen from "./more.png";
import toggleIconClose from "./close.png";
import "./navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTranslucent, setIsTranslucent] = useState(false);
  const navbarRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = navbarRef.current.offsetHeight;
      if (scrollPosition >= navbarHeight) {
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
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 py-4 px-6 flex justify-between items-center transition-all duration-300 ${
        isTranslucent
          ? "bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-md"
          : "bg-transparent"
      } z-10`}
    >
      <div className="flex items-center">
        <div className="font-bold text-xl lg:text-3xl flex items-center">
          <span className="w-10 h-10 mr-2 flex items-center">
            <img src={logo} alt="SVCE Logo" />
          </span>
          <span className="glow">
            <span className="text-blue-500">SVCE</span>{" "}
            <span className="text-white">Bengaluru</span>
          </span>
        </div>
      </div>
      <ul
        className={`md:flex md:items-center md:space-x-8 w-full md:w-auto ${
          isNavOpen ? "block" : "hidden md:block"
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
        {/* ... other navigation links ... */}
        <li>
          {" "}
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
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={toggleNav}
      >
        <img
          src={isNavOpen ? toggleIconClose : toggleIconOpen}
          alt="Toggle Menu"
          className="h-6 w-6 bg-color-white"
        />
      </button>
    </nav>
  );
};

export default Navbar;
