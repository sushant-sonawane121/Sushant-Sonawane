import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
// import logo from "../assets/logo.jpeg";
import logo from "../assets/logo-bg-remoded.png";
export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [scrolly, setScrollY] = useState(false);

  const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  // function isdark() {
  //     document.documentElement.classList.add('dark')
  // }
  // isdark();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`border z-10 border-b-zinc-950 px-4 md:px-40 ${
        scrolly ? "sticky bg-gray-100" : ""
      } top-0 left-0 right-0`}
    >
      <div className="flex justify-between items-center md:my-4">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-14 h-14 md:hidden" />
            <h2 className="text-2xl hidden md:block">Sushant Sonawane</h2>
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-10">
          {/* Large Display Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-10 text-lg">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* Navbar Icons */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="theme-icons flex">
              <span onClick={toggleTheme} className="cursor-pointer text-2xl">
                {isDark ? <FaMoon /> : <FaSun />}
              </span>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="md:hidden flex items-center">
              <span className="cursor-pointer text-2xl">
                {isNavMenuOpen ? (
                  <IoClose onClick={toggleNavMenu} />
                ) : (
                  <FaBars onClick={toggleNavMenu} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white border-b border-zinc-950 md:hidden transition-transform ${
          isNavMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose onClick={toggleNavMenu} className="text-2xl mt-4 ml-4" />
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#skills" onClick={toggleNavMenu}>Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={toggleNavMenu}>Projects</a>
              </li>
              <li>
                <Link to="contact" onClick={toggleNavMenu}>Contact</Link>
              </li>
        </ul>
      </nav>
    </header>
  );
}
