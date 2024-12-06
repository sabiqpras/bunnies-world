import React from "react";
import NavList from "../NavList";

const Nav = () => {
  return (
    <nav>
      <ul className="grid grid-cols-4">
        <NavList title="lorem" link="/" />
        <NavList title="lorem" link="/" />
        <NavList title="lorem" link="/" />
        <NavList title="lorem" link="/" />
      </ul>
    </nav>
  );
};

export default Nav;
