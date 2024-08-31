import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaMoon, FaAngleDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo-bg-remoded.png";

export default function Header() {
  // Set initial dark mode based on localStorage value
  const [isDark, setIsDark] = useState(localStorage.getItem("dark") === "true");
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [scrolly, setScrollY] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Update localStorage whenever isDark changes
    localStorage.setItem("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  const handleTools = () => {
    setShowTools(!showTools);
  };

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
    // window.addEventListener("click",toggleNavMenu);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("click",toggleNavMenu);
    };
  }, []);

  return (
    <header
      className={` border border-slate-800 z-10 px-4 md:px-40 bg-white dark:bg-slate-800 dark:text-white ${
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
              <li className="relative">
                <span
                  className="flex gap-1 items-center cursor-pointer"
                  onClick={handleTools}
                >
                  Tools <FaAngleDown />
                </span>

                <ul
                  className={`bg-white text-black dark:bg-slate-800 dark:text-white border-2 rounded absolute min-w-max px-1 top-8
                  ${showTools ? "block" : "hidden"}
                  `}
                >
                  <li className="hover:bg-gray-400 rounded m-1 p-[2px]">
                    <Link to="/textanalysis" onClick={handleTools}>
                      Text Analysis
                    </Link>
                  </li>
                  <li className="hover:bg-gray-400 rounded m-1 p-[2px]">
                    <Link to="/agecalculator" onClick={handleTools}>
                      Age Calculater
                    </Link>
                  </li>
                </ul>
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
        className={`fixed top-0 left-0 w-full bg-white border-b border-zinc-950 md:hidden transition-transform bg-white dark:bg-slate-800 dark:text-white ${
          isNavMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose onClick={toggleNavMenu} className="text-2xl mt-4 ml-4" />
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="relative">
            <span
              className="flex gap-1 items-center cursor-pointer"
              onClick={handleTools}
            >
              Tools <FaAngleDown />
            </span>

            <ul
              className={`bg-white text-black dark:bg-slate-800 dark:text-white absolute min-w-max px-1 top-8
                  ${showTools ? "block" : "hidden"}
                  `}
            >
              <li className="hover:bg-gray-400 rounded m-1 p-[2px]">
                <Link
                  to="/textanalysis"
                  onClick={() => {
                    handleTools();
                    toggleNavMenu();
                  }}
                >
                  Text Analysis
                </Link>
              </li>
              <li className="hover:bg-gray-400 rounded m-1 p-[2px]">
                <Link
                  to="/agecalculator"
                  onClick={() => {
                    handleTools();
                    toggleNavMenu();
                  }}
                >
                  Age Calculater
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#skills" onClick={toggleNavMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleNavMenu}>
              Projects
            </a>
          </li>
          <li>
            <Link to="contact" onClick={toggleNavMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
