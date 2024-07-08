import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div>
      {navLinks.map((link) => (
        <a key={link.id} href={link.title}>
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
