import {
  FaJedi,
  FaHubspot,
  FaReact,
  FaEdge,
  FaDiscord,
  FaUnity,
  FaWrench,
  FaFortAwesome,
  FaMailBulk,
} from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "home",
    links: [{ label: "home", icon: <FaFortAwesome />, url: "/" }],
  },
  {
    page: "skills",
    links: [
      { label: "web design", icon: <FaEdge />, url: "/skills#web" },
      {
        label: "single-page applications",
        icon: <FaDiscord />,
        url: "/skills#single",
      },
      { label: "other", icon: <FaWrench />, url: "/skills#other" },
    ],
  },
  {
    page: "portfolio",
    links: [
      { label: "react", icon: <FaReact />, url: "/portfolio#react" },
      { label: "unity", icon: <FaUnity />, url: "/portfolio#unity" },
    ],
  },
  {
    page: "about",
    links: [
      { label: "family", icon: <FaHubspot />, url: "/about#family" },
      { label: "hobbies", icon: <FaJedi />, url: "/about#hobbies" },
    ],
  },
  {
    page: "contact",
    links: [{ label: "contact", icon: <FaMailBulk />, url: "/contact" }],
  },
];

export default sublinks;
