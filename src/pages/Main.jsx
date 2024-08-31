import ss from "../assets/ss.jfif";
import { FaExternalLinkAlt, FaHandshake, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <>
      <section className="px-4 md:px-40 max-h-max min-h-screen pt-10 md:pt-20 bg-white dark:bg-slate-800 dark:text-white">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:px-16">
          <div className="left flex flex-col justify-center space-y-8 py-2 md:space-y-14">
            <div className="text-3xl space-y-2">
              <h4>Hi, I am</h4>
              <h3 className="font-bold text-4xl">Sushant Sonawane</h3>
              <h2 className="text-2xl">Full Stack Developer</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1yYjk6qm8DrA_EQ-qbXSU4TN9JatFUZVb/view?usp=sharing"
                className="flex items-center gap-2 border-2 border-green-500 px-4 py-2 rounded"
              >
                Resume <FaExternalLinkAlt />
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 border-2 border-green-500 px-4 py-2 rounded"
              >
                Contact <FaHandshake />
              </Link>
            </div>
          </div>
          <div className="right mt-8 md:mt-0 md:ml-10">
            <img
              src={ss}
              alt="Sushant Sonawane"
              className="h-80 w-80 rounded-full object-cover hidden md:block"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10 ">
          <div className="border-2 border-red-500 py-6 rounded-xl px-1">
            <FaArrowDown className="animate-bounce text-xl text-green-500" />
          </div>
        </div>
      </section>
    </>
  );
}
