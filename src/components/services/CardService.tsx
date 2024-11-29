import { motion } from "framer-motion";
import React from "react";

type PropsService = {
  title: string;
  content: string;
  icon: string;
  delay: number; // Añade una prop para el delay
};

const CardService: React.FC<PropsService> = ({ title, content, icon, delay }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, delay }} // Usa el delay pasado como prop
      viewport={{ once: true, amount: 0.2 }}
      className="w-full md:w-1/4 flex flex-col items-center p-4"
    >
      <div className="text-center p-6">
        {/* Icono */}
        <div className="flex justify-center items-center border w-16 h-16 rounded-full mx-auto">
          <span className={icon + " text-3xl text-primary"}></span>
        </div>
        {/* Contenido */}
        <div className="mt-4 p-2 flex-1 text-lg">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500 mt-2 text-custom-16 tracking-tight">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardService;