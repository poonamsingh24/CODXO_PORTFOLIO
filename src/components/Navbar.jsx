import React, { useState } from "react";
import Container from "./Container";
import user from "../assets/user.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setopen] = React.useState(false);
  return (
    <Container>
      <nav className="bg-white fixed flex items-center justify-between shadow-md right-0 left-0  top-0 md:px-14 px-5 py-2">
        <div className="flex gap-2">
          <img src={user} alt="profile" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="font-semibold text-xl">
              Poona
              <span className="font-semibold text-2 xl text-blue-500">m</span>
            </h1>
            <p className="text-sm font-bold">Web Devlopher</p>
          </div>
        </div>
        {/* navbar */}
        <div>
          {" "}
          {open ? (
            <button>
              <ImCross
                size={24}
                onClick={() => setopen(!open)}
                className=" absolute right-5 top-5  "
              />
            </button>
          ) : (
            <button onClick={() => setopen(!open)} className="md:hidden flex">
              <FaBars size={24} />
            </button>
          )}
          <div>
            <ul className=" md:flex space-x-8 font-semibold hidden ">
              <li className="cursor-pointer">
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  offset={70}
                  activeClass="active"
                >
                  Home
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link
                  to="Skills"
                  smooth={true}
                  duration={500}
                  offset={70}
                  activeClass="active"
                >
                  Skills
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="Portfolio"
                  smooth={true}
                  duration={500}
                  offset={70}
                  activeClass="active"
                >
                  Portfolio
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="About"
                  smooth={true}
                  duration={500}
                  offset={70}
                  activeClass="active"
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  offset={70}
                  activeClass="actives"
                >
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={
            open
              ? " w-full h-full md:hidden fixed right-0 top-20 shadow px-5 py-7 ease-in duration-500 z-50 bg-gray-100"
              : "  hidden ease-in-out duration-500"
          }
        >
          <ul className=" flex flex-col items-center  space-y-5 mt-20  px-8 py-10">
            <li className="cursor-pointer">
              <Link
                onClick={() => setopen(!open)}
                to="Home"
                smooth={true}
                duration={500}
                offset={70}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={() => setopen(!open)}
                to="Skills"
                smooth={true}
                duration={500}
                offset={70}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                onClick={() => setopen(!open)}
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={70}
                activeClass="active"
              >
                Portfolio
              </Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link
                onClick={() => setopen(!open)}
                to="About"
                smooth={true}
                duration={500}
                offset={70}
                activeClass="active"
              >
                About me
              </Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link
                onClick={() => setopen(!open)}
                to="Contact"
                smooth={true}
                duration={500}
                offset={70}
                activeClass="active"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
