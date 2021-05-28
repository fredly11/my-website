import React from "react";
import { useGlobalContext } from "../context";

const Skills = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
      <section className="about" onMouseOver={closeSubmenu} id="web">
        <div className="about-title">
          <h1>Skills</h1>
          <div className="about-underline"></div>
        </div>
        <div className="skills-card">
          <h2 className="skills-title">Web Design</h2>
          <p className="skills-p">
            This website is just one example of how I can use HTML, CSS,
            JavaScript, and frameworks such as React, Bootstrap, and Angular to
            design smooth websites that are responsive on both mobile and
            computer browsers.
          </p>
        </div>
      </section>
      <section className="about" onMouseOver={closeSubmenu} id="single">
        <div className="about-title">
          <div className="about-underline"></div>
        </div>
        <div className="skills-card">
          <h2 className="skills-title">Single-Page Applications</h2>
          <p className="skills-p">
            My skills are not constrained just to the web, though. I can
            construct intuitive user interfaces for single-page mobile
            applications.
          </p>
        </div>
      </section>
      <section className="about" onMouseOver={closeSubmenu} id="other">
        <div className="about-title">
          <div className="about-underline"></div>
        </div>
        <div className="skills-card">
          <h2 className="skills-title">Other</h2>
          <p className="skills-p">
            Beyond web design, I have experience in several other programming
            languages including C++, C#, and Python. I also have experience in
            Game Design and 3D art I have obtained from personal game projects
            in the Unity game engine.
          </p>
        </div>
      </section>
    </>
  );
};

export default Skills;
