import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="border border-t-zinc-950 px-4 md:px-40 bg-gray-100 py-4 mt-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <ul>
              <li className="flex gap-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/sushant-sonawane121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-xl"
                >
                  <FaLinkedin />
                </a>
             
                <a
                  href="https://github.com/sushant-sonawane121/"
                  className="text-black text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/sushant__sonawane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-xl"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap">
            <h4>Design and Developed with </h4>
            <p>❤️ By - </p>
            <a href="#" className="text-blue-500">
              Sushant Sonawane
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
