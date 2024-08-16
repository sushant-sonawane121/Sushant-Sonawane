const Skills = () => {
  return (
    <>
      <section className="px-4 md:px-40 max-h-max min-h-screen pt-10 md:pt-20">
        <div className="mb-10">
          <h2 id="skills" className="text-4xl font-bold relative pb-2 before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:left-0 before:bottom-0">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg">
            <div className="border-b-2 border-green-500 pb-2 mb-4">
              <h3 className="text-xl font-semibold">Front-End</h3>
            </div>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="border border-green-500 p-2 rounded">HTML5</li>
                <li className="border border-green-500 p-2 rounded">CSS3</li>
                <li className="border border-green-500 p-2 rounded">
                  Tailwind CSS
                </li>
                <li className="border border-green-500 p-2 rounded">GSAP</li>
                <li className="border border-green-500 p-2 rounded">ReactJS</li>
              </ul>
            </nav>
          </div>

          {/* card 2 */}
          <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg">
            <div className="border-b-2 border-green-500 pb-2 mb-4">
              <h3 className="text-xl font-semibold">Back-End</h3>
            </div>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="border border-green-500 p-2 rounded">NodeJS</li>
                <li className="border border-green-500 p-2 rounded">
                  ExpressJS
                </li>
                <li className="border border-green-500 p-2 rounded">
                  Mongoose
                </li>
              </ul>
            </nav>
          </div>
          {/* card 3 */}
          <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg">
            <div className="border-b-2 border-green-500 pb-2 mb-4">
              <h3 className="text-xl font-semibold">Database</h3>
            </div>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="border border-green-500 p-2 rounded">MongoDB</li>
                <li className="border border-green-500 p-2 rounded">MySQL</li>
              </ul>
            </nav>
          </div>
          {/* card - 4 */}
          <div className="border-2 border-gray-200 p-4 rounded-lg shadow-lg">
            <div className="border-b-2 border-green-500 pb-2 mb-4">
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <nav>
              <ul className="flex flex-col gap-2">
                <li className="border border-green-500 p-2 rounded">VS Code</li>
                <li className="border border-green-500 p-2 rounded">PostMan</li>
                <li className="border border-green-500 p-2 rounded">Github</li>
                <li className="border border-green-500 p-2 rounded">MongoDB Compass</li>
                <li className="border border-green-500 p-2 rounded">MS-Word</li>
                <li className="border border-green-500 p-2 rounded">Blender <span className="text-[10px] text-red-500">{"(Hobby)"}</span></li>
              </ul>
            </nav>
          </div>
          {/* Additional skill categories can be added here similarly */}
        </div>
      </section>
    </>
  );
};

export default Skills;
