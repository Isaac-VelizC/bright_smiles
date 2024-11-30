import React from "react";
import Testimonial from "../../interfaces/Testimonial";

type PropsTestimonial = {
  data: Testimonial;
};

const CardTestimonial: React.FC<PropsTestimonial> = ({ data }) => {
  return (
    <div className="flex overflow-hidden py-2 md:space-x-4">
      {/* Imagen del usuario */}
      <div
        className="w-28 h-28 rounded-full bg-cover bg-center flex-shrink-0"
        style={{
          backgroundImage: `url(${
            typeof data.img === "string"
              ? data.img
              : "/images/default-image.jpg"
          })`,
        }}
      ></div>

      {/* Contenido del testimonial */}
      <div className="relative flex-1 left-2">
        {/* Ícono de cita */}
        <span className="absolute -top-2 -left-6 text-secondary text-2xl">
          <i className="icon-quote-left"></i>
        </span>
        <p className="text-gray-600 text-custom-16 leading-loose italic mb-4">
          {data.content || "No content available."}
        </p>
        <p className="font-semibold text-lg">{data.name || "Unknown"}</p>
        <span className="text-primary text-sm">{data.rol || "Unknown"}</span>
      </div>
    </div>
  );
};

export default CardTestimonial;
