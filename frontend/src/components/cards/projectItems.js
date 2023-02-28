import React from "react";
import Link from "next/link";

const projectItems = ({ name, language, image_url, info_url }) => {
  return (
    <div className="transition-all duration-500 relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img
        className="transition-all duration-500 rounded-xl group-hover:opacity-10"
        src={image_url}
        alt="/"
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 font-bold text-white text-center">{language}</p>
        <Link href={info_url} target="_blank">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default projectItems;
