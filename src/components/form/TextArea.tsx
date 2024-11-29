import React, { TextareaHTMLAttributes } from "react";

type PropsTextArea = TextareaHTMLAttributes<HTMLTextAreaElement> & { // Extiende TextareaHTMLAttributes
  cols: number;
  rows: number;
};

const TextArea: React.FC<PropsTextArea> = ({ cols, rows, ...props }) => { // Usa el operador spread para props
  return (
    <div className="mb-4">
      <textarea
        cols={cols}
        rows={rows}
        className="bg-white px-4 py-3 outline-none w-full text-gray-400 rounded-none border-b-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-gray-300"
        {...props} // Propiedades se pasan directamente
      ></textarea>
    </div>
  );
};

export default TextArea;