import React from "react";

type Props = {
  img: string; // Obligatorio
  enlace: string;
  date: string;
  title: string;
  comments: number;
  user: string;
};

const CardFooterBlog: React.FC<Props> = ({
  img,
  enlace,
  date,
  title,
  comments,
  user,
}) => {
  if (!img) {
    throw new Error("La propiedad 'img' es obligatoria y no puede estar vacía.");
  }

  return (
    <div className="mb-6 flex flex-row">
      <a
        href={enlace}
        className="w-20 md:w-20 h-20 md:h-20 flex-shrink-0 mr-4 rounded-lg overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></a>
      <div className="flex-grow mt-3 md:mt-0">
        <h3 className="text-base md:text-sm text-white font-semibold hover:text-white/50 transition-colors duration-500 ease-in-out">
          <a href={enlace}>{title}</a>
        </h3>
        <div className="flex flex-wrap mt-2 text-xs md:text-sm text-white/70 gap-2">
          <span className="flex items-center space-x-1">
            <span className="icon-calendar"></span>
            <span>{date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="icon-person"></span>
            <span>{user}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="icon-chat"></span>
            <span>{comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFooterBlog;
