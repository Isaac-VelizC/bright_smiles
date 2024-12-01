import { motion } from "framer-motion";
import React from "react";
import Doctor from "../../interfaces/Doctor";

type PropsCardDoctor = {
  data: Doctor;
  delay?: number;
};

const socialIcons = [
  { name: "Twitter", class: "icon-twitter", href: "#" },
  { name: "Facebook", class: "icon-facebook", href: "#" },
  { name: "Google Plus", class: "icon-google-plus", href: "#" },
  { name: "Instagram", class: "icon-instagram", href: "#" },
];

const CardDoctor: React.FC<PropsCardDoctor> = ({ data, delay }) => {
  const w = window.innerWidth;
  
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: w >= 768 ? (typeof delay === "number" ? delay : 0) : 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-1/2 lg:w-1/4 p-4 group"
    >
      <div className="bg-porcelain shadow-lg overflow-hidden mt-8 rounded-lg">
        {/* Imagen */}
        <div
          className="w-full h-72 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${
              typeof data.img === "string" ? data.img : "/default-image.jpg"
            })`,
          }}
          aria-label={`Image of Dr. ${data.name || "Unknown"}`}
        ></div>
        {/* Contenido */}
        <div className="p-6 text-center relative">
          <h3 className="text-xl font-semibold pb-1 transition-colors duration-300 ease-in-out group-hover:text-secondary">
            Dr. {data.name || "Unknown"}
          </h3>
          <span className="block text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">
            {data.specialty?.name || "Specialty not available"}
          </span>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {data.content || "No content available."}
          </p>
          {/* Íconos sociales */}
          <ul className="absolute -top-12 left-0 right-0 flex justify-center space-x-4 transition-transform duration-300 ease-in-out group-hover:scale-90">
            {socialIcons.map((icon) => (
              <li key={icon.name} className="w-8 h-8">
                <a
                  href={icon.href}
                  className="text-primary w-8 h-8 hover:text-secondary bg-porcelain rounded-full flex justify-center items-center shadow-md transition-colors duration-300 ease-in-out" // Transición suave para colores
                  aria-label={`Link to ${icon.name}`}
                >
                  <span className={`${icon.class} text-sm`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CardDoctor;
