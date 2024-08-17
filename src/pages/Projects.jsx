import { FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  return (
    <>
      <section className="px-4 md:px-40 max-h-max min-h-screen py-10  md:pt-20 bg-white dark:bg-slate-800 dark:text-white">
        <div className="mb-10">
          <h2
            id="projects"
            className="text-4xl font-bold relative pb-2 before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:left-0 before:bottom-0"
          >
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg">
            <div className="border-b-2 border-green-500 pb-2 mb-4 flex flex-wrap justify-between items-center">
              <h3 className="text-xl font-bold text-red-500">StudCamp</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/sushant-sonawane121/StudCamp"
                  className="cursor-pointer flex gap-1 items-center"
                >
                  Github <FaExternalLinkAlt className="text-sm text-blue-500" />
                </a>
                <a href="#" className="cursor-pointer flex gap-1 items-center">
                  Live <FaExternalLinkAlt className="text-sm text-blue-500" />
                </a>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h3 className="font-bold">MCA Last sem Project</h3>
                <p>
                  The Basic idea behind this project was to Connect A college
                  and college student on single online platform.
                </p>
              </div>
              <div className="flex flex-col border-t-[1px] border-black mt-2 gap-2">
                <div>
                  <h4>Technology Used</h4>
                </div>
                <ul className="flex flex-wrap gap-2">
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    MongoDB
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    ExpressJS
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    ReactJS
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    NodeJS
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg">
            <div className="border-b-2 border-green-500 pb-2 mb-4 flex flex-wrap justify-between items-center">
              <h3 className="text-xl font-bold text-red-500">Personal Diary</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/sushant-sonawane121/Personal-Diary"
                  className="cursor-pointer flex gap-1 items-center"
                >
                  Github <FaExternalLinkAlt className="text-sm text-blue-500" />
                </a>
                <a href="#" className="cursor-pointer flex gap-1 items-center">
                  Live <FaExternalLinkAlt className="text-sm text-blue-500" />
                </a>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <h3 className="font-bold">Practice Project</h3>
                <p>
                  The Basic idea behind this project was to user can Store their
                  notes or personal diary pages online.
                </p>
              </div>
              <div className="flex flex-col border-t-[1px] border-black mt-2 gap-2">
                <div>
                  <h4>Technology Used</h4>
                </div>
                <ul className="flex flex-wrap gap-2">
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    MongoDB
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    ExpressJS
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    ReactJS
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    NodeJS
                  </li>
                  <li className="border-[1px] border-green-500 px-1 rounded">
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
