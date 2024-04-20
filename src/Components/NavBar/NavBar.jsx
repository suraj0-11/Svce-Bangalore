import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 px-6 flex justify-between items-center transition-all duration-300 ${
        isSticky
          ? 'bg-gray-900 bg-opacity-55 backdrop-filter backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      } z-10`}
    >
      <div className="font-bold text-xl lg:text-3xl">
  <span className="text-blue-500">SVCE</span>
  <span className="text-white"> Bengaluru</span>
</div>

      <button className="text-gray-600 focus:outline-none md:hidden" onClick={toggleNav}>
        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      <ul className={`md:flex md:items-center md:space-x-8 w-full md:w-auto ${isNavOpen ? 'block' : 'hidden'}`}>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300"
          >
            Who We Are
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300"
          >
            Campus &amp; City
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300"
          >
            Academic Life
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300"
          >
            Research
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-full transition-colors duration-300"
          >
            Admissions &amp; Aid
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
