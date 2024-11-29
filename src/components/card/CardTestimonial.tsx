import React from "react";

type PropsTestimonial = {
  img: string;
  name: string;
  content: string;
  rol: string;
};

const CardTestimonial: React.FC<PropsTestimonial> = ({
  img,
  name,
  content,
  rol,
}) => {
  return (
    <div className="flex overflow-hidden py-2 md:space-x-4">
      {/* Imagen del usuario */}
      <div
        className="w-28 h-28 rounded-full bg-cover bg-center flex-shrink-0"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Contenido del testimonial */}
      <div className="relative flex-1 left-2">
        {/* Ícono de cita */}
        <span className="absolute -top-2 -left-6 text-secondary text-2xl">
          <i className="icon-quote-left"></i>
        </span>
        <p className="text-gray-600 text-custom-16 leading-loose italic mb-4">{content}</p>
        <p className="font-semibold text-lg">{name}</p>
        <span className="text-primary text-sm">{rol}</span>
      </div>
    </div>
  );
};

export default CardTestimonial;
