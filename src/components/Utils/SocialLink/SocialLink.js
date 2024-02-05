import React from "react";

const SocialLink = ({ icon }) => {
  return (
    <div>
      <img
        src={icon}
        alt="img/icon"
        className="w-8 h-8 items-center cursor-pointer flex md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-100 "
      />
    </div>
  );
};

export default SocialLink;
