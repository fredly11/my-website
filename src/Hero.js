import React from "react";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Willie Buechele</h1>
          <p>
            Always ready to jump into the fray. Lorem Ipsum and stuff like that
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images"></article>
      </div>
    </section>
  );
};

export default Hero;
