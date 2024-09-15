import React from "react";
import Container from "./Container";
import todo from "../assets/todo.png";
import shopping from "../assets/shopping.png";
import game from "../assets/game.png";
import netflix from "../assets/netflix.png";
// import sweet from "../assets/sweet.png";
import tracker from "../assets/tracker.png";
import libas from "../assets/libas.png";
import weather from "../assets/weather.png";

const Portfolio = () => {
  return (
    <Container>
      <div name="Portfolio">
        <h1 className="font-bold text-3xl mt-14 py-5"> Portfolio</h1>
        <span className="font-semibold text-sm underline"> Feather image</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-7 my-10">
          {card.map((item) => (
            <div
              key={item.id}
              className="md:w-[300px] md:h-[320px] border-[2px] rounded-lg shadow-lg pl-5 md:px-4  py-3 cursor-pointer hover:scale-110 transition bg-white duration-300"
            >
              <div className="w-full h-f object-cover  ">
                <img src={item.logo} alt="" className="w-[300px] h-[120px] " />
              </div>
              <div className="">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-gray-700 pb-1 text-justify">{item?.p}</p>
              </div>{" "}
              <button
                id="btn"
                className="py-3  px-5 bg-blue-500 hover:bg-blue-600 text-white mr-2 rounded-md"
              >
                <a href={item?.link}> Vedio</a>
              </button>
              <button className="py-3 px-5 bg-green-500 hover:bg-green-600 text-white rounded-md">
                {" "}
                <a href={item?.git}> Source Code</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;

const card = [
  {
    id: 1,
    logo: todo,
    name: "Todo List",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_codxo-interncodxo-activity-7232074909420515328-PUvE?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/CODXO",
    p: "create a TodoList. using html, css, JavaScript.😊 test, and provide feedback! I'm always looking to improve and grow as a developer.",
  },
  {
    id: 2,
    logo: weather,
    name: "Weather web",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_web-front-devlopher-activity-7239764560868519937-nPSi?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/CODXO-__2",
    p: "This is weather web made using HTML CSS and JavaScript.",
  },
  {
    id: 3,
    logo: tracker,
    name: "Expense Tracker",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_codxo-webdevlopher-frontend-activity-7240261507882651648-3mVR?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/CODXO-expense-tracker",
    p: "I'm thrilled to share my latest project,E-commerce  Interactive, interfaces using React, Tailwind CSS, HTML, and JavaScript.",
  },
  {
    id: 4,
    logo: shopping,
    name: "Shopping-Wings",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_react-tailwindcss-html-activity-7236619487339323393-YSpk?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/shopping-wings",
    p: "I'm thrilled to share my latest project,E-commerce  Interactive, interfaces using React, Tailwind CSS, HTML, and JavaScript.",
  },
  {
    id: 5,
    logo: game,
    name: "Portfolio",
    name: "Games",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_reactjs-api-gamedevelopment-activity-7236625149553246208-hrdP?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/games",
    p: "Get Ready to Play! Explore, play, and provide feedback! I'm always looking to improve and grow as a developer.",
  },
  {
    id: 6,
    logo: libas,
    name: "Portfolio",
    name: "Libas",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_reactjs-tailwindcss-html-activity-7238940611481858048-CILa?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/Libas",
    p: "I'm thrilled to share my latest project, Libas E-commerce Website, built using React, Tailwind CSS, and HTML! ",
  },
  {
    id: 7,
    logo: netflix,
    name: "Portfolio",
    name: "Netflix clone",
    link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_webdev-netflixclone-html-activity-7159948189435879424-H7j6?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/poonamsingh24/netflix-clone",
    p: "This is my first Project as a beginner. using only HTML and CSS 😊",
  },
  // {
  //   id: 7,
  //   logo: sweet,
  //   name: "Portfolio",
  //   name: "Sweet web",
  //   link: "https://www.linkedin.com/posts/poonam-singh-54443b2b0_userexeperience-websitedesign-mobileoptimization-activity-7232074034228740097-5MnY?utm_source=share&utm_medium=member_desktop",
  //   git: "https://github.com/poonamsingh24/sweetfood-p-1",
  //   p: " Create a Sweets web, responsive, interactive. using html Css... 😊",
  // },
];
