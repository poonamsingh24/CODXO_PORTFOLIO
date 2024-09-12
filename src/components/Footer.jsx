import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <hr />
      <div className="  flex flex-col my-10">
        <div className="flex items-center justify-center  space-x-5">
          <a href="https://www.facebook.com/profile.php?id=100042929861084">
            {" "}
            <FaFacebook size={20} />
          </a>
          <a href="https://www.linkedin.com/in/poonam-singh-54443b2b0/">
            {" "}
            <FaLinkedin size={20} />{" "}
          </a>

          <a href="https://www.instagram.com/punnu_546/">
            <FaInstagram size={20} />
          </a>
          <a href="https://web.telegram.org/k/">
            <FaTelegram size={20} />
          </a>
          <hr />
        </div>
        <div className="border-t-2 mx-auto border-gray-300 mt-5 flex flex-col  items-center">
          <p className="text-center py-5 text-sm">
            &copy; 2024 Your Company Allright reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
