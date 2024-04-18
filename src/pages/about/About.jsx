import React from "react";
import codingSvg from "../../assets/coding.svg";
import { AboutContainer, InfoContainer } from "./About.style";
const About = () => {
  return (
    <AboutContainer>
      <img src={codingSvg} alt="codingimage" />
      <div>
        <h1>
          About Software Developer <span>Salih Tüccar</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi,I am Salih</h2>
        <h3>I'm currently learning FrontEnd Development.</h3>
        <h4>I have already learned JS,ReactJS,SQL,Python</h4>
        <h2>
          {" "}
          <a href="mailto:slhtccr@gmail.com">Send email</a> : slhtccr@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
