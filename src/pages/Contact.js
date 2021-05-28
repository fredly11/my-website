import React from "react";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="about" onMouseOver={closeSubmenu}>
      <div className="about-title">
        <h1>Contact Me</h1>
        <div className="about-underline"></div>
      </div>
      <div className="about-subtitle">
        <p>
          The best way to contact me is via email. Let me know if you're
          interested on working on anything together! Reach me at:
        </p>
        <br />
        <h2>buechelewd@gmail.com</h2>
      </div>
    </section>
  );
};

export default Contact;
