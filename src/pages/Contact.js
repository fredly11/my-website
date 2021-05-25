import React from "react";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">contact component</div>
    </section>
  );
};

export default Contact;
