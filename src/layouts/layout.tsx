// src/layouts/Layout.tsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { useScrollToTop } from "../hooks/use_scroll_to_top";
import { motion } from "framer-motion";

const Layout: React.FC = () => {
  useScrollToTop();

  // Definición de la animación
  const pageTransition = {
    initial: { opacity: 0, x: 50 }, // Estado inicial
    animate: { opacity: 1, x: 0 }, // Estado final
    exit: { opacity: 0, x: -50 }, // Estado al salir
    transition: { duration: 0.5 }, // Duración de la transición
  };

  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleBackToTopClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <Navbar />
      <main>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      {showBackToTop && (
        <button
          onClick={handleBackToTopClick}
          className="fixed right-12 bottom-10 w-10 h-10 text-3xl
              rounded-lg z-40 transition-all duration-300 ease-linear flex items-center justify-center
            bg-secondary hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Layout;
