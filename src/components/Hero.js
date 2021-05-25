import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import cat from "../images/cat.jpg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center section-center">
        <article className="hero-info">
          <h1>Willie Buechele</h1>
          <p>
            Front-end web developer. <br /> Where there's a Willie, there's a
            way.
          </p>
          <div className="underline"></div>
          <Link to="/contact" className="btn hero-btn">
            Contact me
          </Link>
        </article>
        <article className="home-img">
          <img src={cat} alt="cat" className="home-photo" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
