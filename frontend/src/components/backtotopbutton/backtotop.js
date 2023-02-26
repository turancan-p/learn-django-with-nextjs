import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Backtotop = () => {
  return (
    <div className="flex justify-center py-12">
      <Link href="/">
        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
        </div>
      </Link>
    </div>
  );
};

export default Backtotop;
