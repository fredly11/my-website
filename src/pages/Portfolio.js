import React from "react";
import { useGlobalContext } from "../context";

const Portfolio = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      portfolio component
    </section>
  );
};

export default Portfolio;
