import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 bg-white dark:bg-slate-800 dark:text-white">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">404</h1>
      <h2 className="text-2xl text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-center text-gray-600 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
