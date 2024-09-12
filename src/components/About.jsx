import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <Container>
      <div name="About">
        <h1 className="font-bold text-2xl py-2">About</h1>
        <p>
          My expertise lies in crafting responsive, intuitive, and visually
          stunning interfaces that drive engagement and conversion.
        </p>
        <h1 className="font-bold text-2xl py-2">Education & Training</h1>
        <p>
          With a graduation degree in [Major] and a specialized course in
          Front-end Development. I'm well-versed in testing, and optimizing code
          for maximum performance. I'm excited to collaborate with like-minded
          professionals and contribute my skills to build dynamic, user-friendly
          web applications that exceed expectations."
        </p>
        <h1 className="font-bold text-2xl py-2">Skills</h1>
        <p>
          I possess a solid understanding of HTML, CSS, JavaScript, and popular
          frameworks like React[Basic].
        </p>
        <h1 className="font-bold text-2xl py-2">Mission Statement</h1>
        <p>
          My mission is to leverage my skills and creativity to deliver [My
          Expected Company] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuouse learning and growth, always seeking new challenges and
          opportunities to expand my horizions.{" "}
        </p>
      </div>
    </Container>
  );
};

export default About;
