import { motion } from "framer-motion";
import React from "react";
import Services from "../../interfaces/Services";
import { Link } from "react-router-dom";

type Props = {
  data: Services;
  delay?: number;
};

const CardServices: React.FC<Props> = ({ data, delay }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, delay }} // Usa el delay pasado como prop
      viewport={{ once: true, amount: 0.2 }}
      className="w-full md:w-1/3 p-4"
    >
      {" "}
      {/* Ancho responsivo y padding */}
      <div className="border rounded-lg shadow-lg relative flex flex-col h-full">
        {" "}
        {/* Fondo blanco, sombra y flex */}
        <div
          className="bg-cover bg-no-repeat h-60 w-full" // Estilo para la imagen
          style={{
            backgroundImage: `url(${
              typeof data.img === "string"
                ? data.img
                : "/images/default-image.jpg"
            })`,
            backgroundPosition: "center",
          }}
        ></div>
        <Link to={`/treatments/${data.id}/show/${data.slug}`} className="p-6 flex-grow">
          {" "}
          {/* Padding y permite que el contenido crezca */}
          <h3 className="text-xl font-semibold mb-4">
            {data.title || "Unknown"}
          </h3>
          <p className="text-gray-500 text-custom-16 leading-relaxed">
            {data.content || "No content available."}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default CardServices;
