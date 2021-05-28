import React from "react";
import ReactPlayer from "react-player";
import { useGlobalContext } from "../context";

const Portfolio = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
      <section className="about" onMouseOver={closeSubmenu} id="react">
        <div className="about-title">
          <h1>Portfolio</h1>
          <div className="about-underline"></div>
        </div>
        <div className="portfolio-card">
          <h2 className="skills-title">React</h2>
          <div className="video-container">
            <ReactPlayer url="https://www.youtube.com/watch?v=eOhFLNzDymY" />
          </div>
        </div>
      </section>
      <section className="about" onMouseOver={closeSubmenu} id="unity">
        <div className="about-title">
          <div className="about-underline"></div>
        </div>
        <div className="portfolio-card">
          <h2 className="skills-title">Unity</h2>
          <h3>Coming Soon...</h3>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
