import { motion } from "framer-motion";
import React from "react";

type PropsPricing = {
  type: string;
  price: number;
  delay: number;
};

const CardPricing: React.FC<PropsPricing> = ({ type, price, delay }) => {
  const services = [
    "Diagnostic Services",
    "Professional Consultation",
    "Tooth Implants",
    "Surgical Extractions",
    "Teeth Whitening",
  ];
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, delay }} // Usa el delay pasado como prop
      viewport={{ once: true, amount: 0.2 }}
      className="w-full md:w-1/4 p-4 group"
    >
      {" "}
      {/* Ancho responsivo con padding */}
      <div className="border-none rounded-lg shadow-lg relative pb-5 text-center">
        {" "}
        {/* Fondo blanco y sombra */}
        <div className="p-5">
          <h3 className="mb-4 text-lg font-semibold">{type}</h3>{" "}
          {/* Tamaño de texto ajustado */}
          <p className="mb-0">
            <span className="font-light text-3xl text-primary group-hover:text-secondary transition duration-300 ease-in-out">${price}</span>{" "}
            <span className="text-xs text-gray-500 font-normal tracking-wider">
              / session
            </span>
          </p>
        </div>
        <ul className="m-0 p-0 list-none text-sm text-gray-500">
          {" "}
          {/* Lista sin estilo */}
          {services.map((service, index) => (
            <li
              key={index}
              className={`py-4 px-5 ${index % 2 === 0 ? "bg-gray-50" : ""}`}
            >
              {service}
            </li>
          ))}
        </ul>
        <p className="absolute -bottom-4 left-0 right-0 mb-0 text-center text-sm">
          <a
            href="#"
            className="rounded-full bg-primary text-porcelain px-6 py-3 group-hover:bg-secondary transition duration-300 ease-in-out"
          >
            Get Offer
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default CardPricing;
