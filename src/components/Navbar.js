import React from "react";
import logo from ".././images/logo.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="link-btn">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="link-btn"
              onMouseOver={displaySubmenu}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="link-btn"
              onMouseOver={displaySubmenu}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-btn" onMouseOver={displaySubmenu}>
              about
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="link-btn"
              onMouseOver={displaySubmenu}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
