import React from "react";
import Container from "./Container";
import html from "../assets/HTML.png";
import image from "../assets/CSS-Logo.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <Container>
      <div name="Skills">
        <h1 className="font-bold text-2xl py-2">Skills</h1>
        <p>
          I've been working on the below technologyies for about a year now.
        </p>
        <div className="grid grid-cols-1 py-10 md:grid-cols-3 space-y-5 lg:ml-5 place-items-center">
          {card.map((item) => (
            <div
              key={item.id}
              className="py-5 rounded-full w-[200px] h-[200px] shadow-md flex flex-col object-cover justify-center items-center"
            >
              <img src={item.logo} alt="" className="w-[120px] h-[120px] " />
              <p className="p-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default Skills;

const card = [
  {
    id: 1,
    logo: html,
    title: "HTML",
  },
  {
    id: 2,
    logo: image,
    title: "CSS",
  },
  {
    id: 3,
    logo: js,
    title: "JavaScript",
  },
  {
    id: 4,
    logo: react,
    title: "Basic React",
  },
  {
    id: 5,
    logo: tailwind,
    title: "Tailwind css",
  },
];
