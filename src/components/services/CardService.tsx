import { motion } from "framer-motion";
import React from "react";
import Services from "../../interfaces/Services";
import { Link } from "react-router-dom";

type PropsService = {
  data: Services;
  delay?: number; // Añade una prop para el delay
};

const CardService: React.FC<PropsService> = ({ data, delay }) => {
  const w = window.innerWidth;
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: w >= 748 ? delay : 0 }} // Usa el delay pasado como prop
      viewport={{ once: true }}
      className="w-full md:w-1/4 flex flex-col items-center p-4"
    >
      <Link to={`/treatments/${data.id}/show/${data.slug}`} className="text-center p-6">
        {/* Icono */}
        <div className="flex justify-center items-center border w-16 h-16 rounded-full mx-auto">
          <span className={data.icon + " text-3xl text-primary"}></span>
        </div>
        {/* Contenido */}
        <div className="mt-4 p-2 flex-1 text-lg">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-gray-500 mt-2 text-custom-16 tracking-tight">
            {data.content}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CardService;