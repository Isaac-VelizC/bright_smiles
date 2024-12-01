import React from "react";
import { Link } from "react-router-dom";

const Error404: React.FC = () => {
  return (
    <section
      className="h-screen mx-20 my-10 container relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/imgs/11.png)",
        backgroundSize: "50rem",
        backgroundPosition: "center right",
      }}
    >
      <header className="flex items-center justify-between w-full mb-10">
        <h1 className="font-bold text-xl text-gray-800">404 Not Found</h1>
        <nav className="hidden md:flex md:items-center font-medium md:space-x-10 tracking-wider">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/treatments" className="text-gray-600 hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </header>

      <main className="absolute flex flex-col justify-center w-full h-full p-10 space-y-6">
          <h2 className="text-7xl font-bold">Oh My...</h2>
          <p className="text-sm text-gray-500 leading-loose">
            It seems you've hit a page that doesn't exist. <br /> 
            Let's get you back on track!
          </p>
          <Link
            to="/"
            className="px-5 py-3 max-w-40 transition duration-300 ease-in-out bg-secondary/70 hover:bg-secondary text-white rounded-full shadow-md"
          >
            Back to Home
          </Link>
      </main>
    </section>
  );
};

export default Error404;