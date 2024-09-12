import React from "react";
import Container from "./Container";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import girl from "../assets/grid.png";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <Container>
        <div
          name="Home"
          className="grid grid-cols-1 md:grid-cols-2 place-items-center my-20 "
        >
          <div className="order-2">
            <p className="capitalize my-2 py-2">Welcome in my feed</p>
            <h1 className="font-semibold text-2xl md:text-4xl pb-10">
              Hello, I' a
              <ReactTyped
                className="text-blue-600 font-bold md:text-3xl pl-1"
                loop={true}
                strings={["Devlopher", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
              />
            </h1>
            <p className="pb-10 text-justify">
              "As a detail-oriented and innovative front-end developer, I bring
              a strong foundation in computer science and a passion for creating
              seamless user experiences. With a graduation degree in [Major] and
              a specialized course in Front-end Development, I possess a solid
              understanding of HTML, CSS, JavaScript, and popular frameworks
              like React[Basic].
            </p>

            <h4 className="font-bold pb-3 text-center md:text-start">
              Abilable on
            </h4>
            <div className="flex items-center justify-center md:justify-start  space-x-5">
              <a href="https://www.facebook.com/profile.php?id=100042929861084">
                {" "}
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/in/poonam-singh-54443b2b0/">
                {" "}
                <FaLinkedin size={24} />{" "}
              </a>

              <a href="https://www.instagram.com/punnu_546/">
                <FaInstagram size={24} />
              </a>
              <a href="https://web.telegram.org/k/">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
          <div className=" lg:ml-28 md:mr-12 order-1">
            <div className="w-full h-full object-cover">
              <img src={girl} alt="" className="w-[450px] h-[450px]" />
            </div>
          </div>
        </div>
      </Container>

      <hr />
    </>
  );
};

export default Home;
