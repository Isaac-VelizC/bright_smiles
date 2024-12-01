import React from "react";
import Blog from "../../interfaces/Blog";
import { Link } from "react-router-dom";

type Props = {
  data: Blog;
  comments: number;
  colorText?: string;
};

const CardFooterBlog: React.FC<Props> = ({
  data,
  comments,
  colorText,
}) => {
  if (!data.img) {
    throw new Error("La propiedad 'img' es obligatoria y no puede estar vacía.");
  }

  return (
    <div className="mb-6 flex flex-row">
      <Link
        to={`/blog/${data.id}/show/${data.slug}`}
        className="w-20 md:w-20 h-20 md:h-20 flex-shrink-0 mr-4 rounded-lg overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${data.img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></Link>
      <div className="flex-grow mt-3 md:mt-0">
        <h3 className={`text-base md:text-sm font-semibold ${colorText}
         transition-colors duration-500 ease-in-out`}>
          <Link to={`/blog/${data.id}/show/${data.slug}`}>{data.title}</Link>
        </h3>
        <div className="flex flex-wrap mt-2 text-xs md:text-sm text-gray-400 gap-2">
          <span className="flex items-center space-x-1">
            <span className="icon-calendar"></span>
            <span>{data.date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="icon-person"></span>
            <span>{data.user}</span>
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
