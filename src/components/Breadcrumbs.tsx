import { motion } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  title: string;
  subtitle?: string;
};

const Breadcrumbs: React.FC<Props> = ({ title }) => {
  const location = useLocation();

  // Eliminar el primer carácter '/' del pathname
  const formattedPathname = location.pathname.replace(/^\/+/, '');

  return (
    <section
      className="relative hero-wrap hero-wrap-2 py-24 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/imgs/bg-1.webp')",
        backgroundAttachment: "fixed",
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-40"></div>
      {/* Overlay oscuro */}
      <div className="container mx-auto px-6 relative">
        <div className="text-white flex flex-wrap items-center justify-center h-full">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }} // Usa el delay pasado como prop
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-9/12 text-center"
          >
            <h1 className="mb-2 text-4xl font-bold">{title}</h1>
            <p className="text-sm tracking-widest uppercase">
              <span className="mr-2">
                <Link to="/" className="hover:underline">
                  Home <i className="icon-arrow_forward"></i>
                </Link>
              </span>
              <span>
                {formattedPathname} {/* Aquí se muestra el pathname sin '/' */}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;