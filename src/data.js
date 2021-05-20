import {
  FaJedi,
  FaHubspot,
  FaReact,
  FaEdge,
  FaDiscord,
  FaUnity,
  FaWrench,
} from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "skills",
    links: [
      { label: "web design", icon: <FaEdge />, url: "/products" },
      {
        label: "single page applications",
        icon: <FaDiscord />,
        url: "/products",
      },
      { label: "other", icon: <FaWrench />, url: "/products" },
    ],
  },
  {
    page: "portfolio",
    links: [
      { label: "react", icon: <FaReact />, url: "/products" },
      { label: "unity", icon: <FaUnity />, url: "/products" },
    ],
  },
  {
    page: "about me",
    links: [
      { label: "family", icon: <FaHubspot />, url: "/products" },
      { label: "hobbies", icon: <FaJedi />, url: "/products" },
    ],
  },
];

export default sublinks;
