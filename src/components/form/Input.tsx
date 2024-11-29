import React, { InputHTMLAttributes } from "react";

type PropsInput = InputHTMLAttributes<HTMLInputElement>; // Extiende InputHTMLAttributes

const Input: React.FC<PropsInput> = (props) => {
  return (
    <div className="mb-4">
      <input
        className="bg-white px-4 py-3 outline-none w-full text-gray-400 rounded-none border-b-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-gray-300"
        {...props} // Propiedades se pasan directamente
      />
    </div>
  );
};

export default Input;