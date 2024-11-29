import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  // Definimos las rutas una sola vez
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctor", path: "/doctor" },
    { name: "Treatments", path: "/treatments" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Barra Superior */}
      <div className="py-4 md:py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Sección Dentista */}
            <div className="text-center w-full justify-center relative md:w-1/5 md:order-2">
              <Link
                to="/"
                className="block text-3xl md:text-4xl font-bold leading-none"
              >
                Dentista
                <span className="block text-xs font-medium text-gray-400">
                  Dental Clinic
                </span>
              </Link>
            </div>

            {/* Sección Contacto */}
            <div className="flex items-center md:w-1/3 px-4 md:px-0 gap-4 md:order-1 md:text-right">
              <div className="flex justify-center items-center md:order-last w-12 h-12 border border-gray-300 rounded-full">
                <span className="icon-map text-secondary text-lg"></span>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">
                  <span className=" text-secondary">Free Call: </span>
                  <span>
                    +1 234 456 78910
                  </span>
                </p>
                <p className="text-xs md:text-xs tracking-wide font-light text-gray-500">
                  198 West 21th Street, Suite 721, New York NY 10016
                </p>
              </div>
            </div>

            {/* Sección Horarios */}
            <div className="flex items-center md:w-1/3 px-4 md:px-0 gap-4 md:order-3">
              <div className="flex justify-center items-center w-12 h-12 border border-gray-300 rounded-full">
                <span className="icon-paper-plane text-secondary text-lg"></span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Open Hours</p>
                <p className="text-xs font-light text-gray-500">
                  <span>Mon - Sat:</span>
                  <span className="font-semibold text-secondary">
                    {" "}
                    8:00am - 9:00pm
                  </span>{" "}
                  <span>Sun: Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Navegación */}
      <nav className="bg-black md:bg-transparent">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-start md:justify-center py-2 md:py-8">
            {/* Botón Toggle (Móvil) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 focus:outline-none flex items-center"
              aria-label="Toggle navigation"
            >
              <span
                className={
                  isOpen ? "icon-close text-2xl" : "icon-menu text-2xl"
                }
              />
              <p className="pl-2 text-lg uppercase">Menu</p>
            </button>

            {/* Menú Principal (Pantallas Grandes) */}
            <div className="hidden md:flex md:items-center md:space-x-10 tracking-wider">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  to={route.path}
                  className={`text-sm uppercase font-medium transition duration-300 ease-in-out ${
                    isActive(route.path)
                      ? "text-primary"
                      : "hover:text-secondary"
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Menú Desplegable (Móvil) */}
        <div
          className={`transition-all duration-300 ease-in-out bg-black overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } md:hidden`}
        >
          <ul className="flex flex-col pt-4 pb-8 px-6 space-y-6">
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition text-sm uppercase ${
                    isActive(route.path)
                      ? "text-primary"
                      : "text-white hover:text-secondary"
                  }`}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
