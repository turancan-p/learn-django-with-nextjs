import React, { useState, useEffect } from "react";
import Image from "next/image";
import navLogo from "../../../public/images/navLogo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={
          scroll
            ? "fixed w-full h-20 shadow-xl z-[100] bg-white bg-opacity-10 backdrop-blur-lg"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <Image src={navLogo} alt="/" width="125" height="50" />
          </Link>
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image src={navLogo} alt="/" width="87" height="35" />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 uppercase">
                  Let's build something together
                </p>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Home
                    </li>
                  </Link>
                  <Link href="/#about">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      About
                    </li>
                  </Link>
                  <Link href="/#skills">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Skills
                    </li>
                  </Link>
                  <Link href="/#projects">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Projects
                    </li>
                  </Link>
                  <Link href="/#contact">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className="pt-40">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Connect With Me
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <Link href="https://github.com/turancan-p/" target="_blank">
                      <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>

                    <Link
                      href="https://instagram.com/turancan.pamuk/"
                      target="_blank"
                    >
                      <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaInstagram />
                      </div>
                    </Link>

                    <Link href="/#contact">
                      <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <AiOutlineMail />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
