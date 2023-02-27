import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm Turan Can and i'm from Turkey. I started my software development
            adventure in September 2022. First I learned the python language and
            did a few small projects and one that could be big for a beginner.
            Then I started learning web development because I wanted to publish
            this project on the web. First I learned HTML & CSS and then I
            started learning JavaScript. When I started learning JavaScript, I
            tried different frameworks, the first of which was React JS, and I
            got my first job here as a freelancer, and I made a small-scale
            website for a corporate export company. I do research and
            small-scale projects every day to improve myself more. I share some
            of my projects on github. I am currently developing projects to
            improve myself on React JS and Next JS for Front-end also Django for
            Back-end.
          </p>
          <Link
            className="py-2 text-gray-600 underline cursor-pointer"
            target="_blank"
            href="https://github.com/turancan-p"
          >
            Check out some of my projects on github.
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
