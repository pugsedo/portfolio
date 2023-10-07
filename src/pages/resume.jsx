import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { useSpring, animated } from "@react-spring/web";

import Base from "./base";

import "./css/resume.scss";

const resumeSections = [
  {
    id: 0,
    title: "Skills",
    content: (
      <p>
          Web developer with 5 years of experience. I've learned frameworks/libraries
          such as React, Svelte, and Vue. I also have know back-end
          technologies including Express JS, PostgreSQL, Redis, and Sockets. My
          best skills are with Node.js, React, and TypeScript.
          
      </p>
    ),
  },
  {
    id: 1,
    title: "Experience",
    content: <p>hello hello hello hello hello hello hello 1</p>,
  },
  {
    id: 2,
    title: "Section 2",
    content: <p>hello hello hello hello hello hello hello 2</p>,
  },
];

function ResumeSection({ section_key, currentSection, title, content }) {
  console.log(currentSection, section_key)

  if (currentSection !== section_key) {
    return (<div></div>);
  }

  return (
    <div className="resumeSection">
      <h1>{title}</h1>
      {content}
    </div>
  );
}

export default function Resume() {
  const [data, setData] = useState({
    currentSection: 0
  });

  const handleData = (val) => {
    console.log('val', resumeSections.length - 1)

    if (val.currentSection < 0) {
      val.currentSection = resumeSections.length - 1; 
    } 

    if (val.currentSection > resumeSections.length - 1) {
      val.currentSection = 0; 
    } 

    setData(val);
    console.log(val);
  };

  return (
    <Base>
      <div className="resumeContent">
        {resumeSections.map((section) => (
          <ResumeSection
            key={section.id}
            section_key={section.id}
            currentSection={data.currentSection}
            title={section.title}
            content={section.content}
          />
        ))}

        <div className="btnContainer">
          <button className="arrowBtn" onClick={() => {
            handleData({currentSection: data.currentSection - 1});
          }}>
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{color: "#ffffff"}}/>
          </button>

          <button className="arrowBtn" onClick={() => {
            handleData({currentSection: data.currentSection + 1});
          }}>
            <FontAwesomeIcon icon={faArrowRight} size="2xl" style={{color: "#ffffff"}}/>
          </button>
        </div>
      </div>
    </Base>
  );
}
