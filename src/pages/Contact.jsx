import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppClick = () => {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number
    const url = `https://wa.me/${8421242342}?text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white dark:bg-slate-800 dark:text-white px-4 md:px-40 max-h-max min-h-screen pt-10 md:pt-20">
      <div className="text-center mb-10 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Feel free to contact me through social media or the contact form
          below.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white text-md rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-10">
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <h3 className="text-2xl font-semibold mb-6">Social Media</h3>
          <div className="flex flex-col">
            <div className="flex space-x-4 mb-2">
              <a
                href="https://www.linkedin.com/in/sushant-sonawane121/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-3xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sushant-sonawane121/"
                className="text-black text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/sushant__sonawane/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-3xl"
              >
                <FaInstagram />
              </a>
            </div>
            <div>
              <p>sushantsonawane121@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleWhatsAppClick();
            }}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 p-3 rounded"
              rows="5"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
