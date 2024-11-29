import React from "react";

type Props = {
  name: string;
  type: string;
  
};

const InputForm: React.FC<Props> = ({ name, type }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-8 relative">
      <input
        type={type}
        className="border-b-[1px] w-[90%] h-10 px-0 bg-transparent placeholder:text-gray-100 font-medium text-[13px] rounded-none shadow-none focus:outline-none"
        placeholder={name}
      />
    </div>
  );
};

export default InputForm;
