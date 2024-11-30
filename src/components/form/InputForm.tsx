import React, { InputHTMLAttributes } from "react";

type PropsInput = InputHTMLAttributes<HTMLInputElement>;

const InputForm: React.FC<PropsInput> = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-8 relative">
      <input
        className="border-b-[1px] w-[90%] h-10 px-0 bg-transparent text-gray-100 placeholder:text-gray-100 font-medium text-[13px] 
        rounded-none shadow-none focus:outline-none icon"
        {...props}
      />
    </div>
  );
};

export default InputForm;
