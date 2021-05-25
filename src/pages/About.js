import React from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">about component</div>
    </section>
  );
};

export default About;
