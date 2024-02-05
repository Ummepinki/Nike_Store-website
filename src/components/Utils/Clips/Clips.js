import React from "react";
import { FaPlay } from "react-icons/fa";
const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className="relative h-36 w-40 rounded-xl group cursor-pointer transition-all duration-100 overflow-hidden lg:w-28 lg:h-24 md:w-24 md:h-20 sm:w-16   sm:h-14">
        <img
          src={imgsrc}
          alt="img/clips"
          className="insert-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 translate-opacity duration-500"
        />
        <div className="bg-white blur-effect-theme absolute top-14 left-14 lg:top-8 lg:left-9  right-0 sm:top-4 sm:left-5 opacity-100 z-[100]  w-8 h-8 md:w-5 md:h-5 flex items-center  justify-center rounded-full">
          <FaPlay className="icon-style text-slate-900 md:w-3 md:h-3" />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0   group-hover:z-50   rounded-xl"
        />
        <source type="video/mp4" src={clip} />
      </div>
    </>
  );
};

export default Clips;
