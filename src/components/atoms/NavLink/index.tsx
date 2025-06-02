import React from "react";
import type { NavLinkProps } from "./types";

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="nav-link"
      style={{
        position: "relative",
        padding: "0.5rem 1rem",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {children}
    </a>
  );
};

export default NavLink;
