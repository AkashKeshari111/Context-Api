import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/users", title: "Users" },
];

const Navbar = () => {
  return (
    <div>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={link.path}
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
