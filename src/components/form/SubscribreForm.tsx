import React from "react";

const SubscribeForm: React.FC = () => {
  return (
    <form action="#" className="pt-6 pb-8 mb-4 max-w-md mx-auto">
      <div className="relative mb-0">
        <input
          type="text"
          className="py-3 mb-2 w-full text-center bg-white/10 border-none text-white/70 placeholder-white/70 text-lg transition duration-150 ease-in-out focus:outline-none focus:border-none focus:ring-2 focus:ring-transparent"
          placeholder="Enter email address"
        />
        <input
          type="submit"
          value="Subscribe"
          className="block w-full h-14 text-custom-16 border-none bg-primary rounded-none cursor-pointer hover:bg-primary/65 transition duration-300 ease-in-out"
        />
      </div>
    </form>
  );
};

export default SubscribeForm;
