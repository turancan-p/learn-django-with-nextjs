import Image from "next/image";
import Link from "next/link";
import React from "react";
import hdagroImg from "../../../public/projects/hdagro.png";

const projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={hdagroImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute">
              <h3 className="text-2xl text-white tracking-wider text-center">
                HDAGRO
              </h3>
              <p className="pb-4 pt-2 font-bold text-white text-center">
                React JS
              </p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
