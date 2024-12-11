import React from "react";
import NavList from "../NavList";

const Nav = () => {
  return (
    <nav className="">
      <ul className="flex justify-between pt-5 font-bold">
        <NavList title="Profile" link="/" />
        <NavList title="Discography" link="/" />
        <NavList title="About" link="/" />
      </ul>
    </nav>
  );
};

export default Nav;
