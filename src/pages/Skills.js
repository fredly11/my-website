import React from "react";
import { useGlobalContext } from "../context";

const Skills = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      contact component
    </section>
  );
};

export default Skills;
