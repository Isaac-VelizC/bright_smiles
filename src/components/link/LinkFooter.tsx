import React from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  enlace?: string;
};

const LinkFooter: React.FC<Props> = ({ name, enlace }) => {
  return (
    <li className="mb-2">
      <Link
        to={enlace ?? "#"}
        className="text-white/70 hover:text-white hover:font-semibold leading-6 flex items-center space-x-2 transition-transform duration-300 ease-in-out"
      >
        <span className="icon-arrow_forward text-white"></span>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default LinkFooter;
