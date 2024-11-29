import React from "react";

type Props = {
    icon: string;
};

const SocialFooter: React.FC<Props> = ({ icon }) => {
  return (
    <li className="list-none mt-2 inline-block">
      <a className="hover:text-white h-10 w-10 block float-left rounded-full relative bg-white/5" href="#">
        <span className={`icon-${icon} absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></span>
      </a>
    </li>
  );
};

export default SocialFooter;