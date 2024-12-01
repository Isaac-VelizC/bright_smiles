import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Blog from "../../interfaces/Blog";

type PropsBlog = {
  data: Blog;
  comments: number;
  delay?: number;
};

const CardBlog: React.FC<PropsBlog> = ({
  data,
  comments,
  delay,
}) => {
  const w = window.innerWidth;
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: w >= 748 ? delay : 0 }} // Usa el delay pasado como prop
      viewport={{ once: true, amount: 0.2 }}
      className="w-full md:w-1/2 lg:w-1/3 p-4"
    >
      <div className="blog-entry bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Imagen con fecha */}
        <Link
          to={`/blog/${data.id}/show/${data.slug}`}
          className="block w-full h-64 bg-cover bg-center relative justify-end"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          <div className="absolute bottom-0 right-0 text-white bg-secondary text-center p-2">
            <span className="block text-3xl mb-3 font-bold">18</span>
            <span className="block text-sm mb-2">September</span>
            <span className="block text-xs">2019</span>
          </div>
        </Link>
        {/* Contenido */}
        <div className="relative border-t-0 rounded-sm p-6">
          <h3 className="text-xl tracking-wider font-semibold mb-4">
            <Link
              to={`/blog/${data.id}/show/${data.slug}`}
              className="hover:text-secondary transition ease-in-out duration-300"
            >
              {data.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-custom-16 leading-normal tracking-wider mb-4">
            {data.short}
          </p>
          {/* Botón y metadatos */}
          <div className="flex items-center justify-between mt-4">
            <Link
              to={`/blog/${data.id}/show/${data.slug}`}
              className="bg-primary px-4 py-2 font-semibold text-white text-sm rounded-3xl hover:bg-secondary transition duration-300"
            >
              Read More <span className="icon-arrow-right pl-2"></span>
            </Link>
            <div className="flex items-center space-x-4 text-gray-600 text-sm">
              <a href="#" className="text-blue">
                {data.user}
              </a>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-secondary"
              >
                <span className="icon icon-chat text-lg mr-1"></span> {comments}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardBlog;
