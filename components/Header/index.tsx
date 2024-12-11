import React from "react";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="grid grid-cols-2 pt-2">
      <div className="font-black text-4xl">
        Bunnies <br /> World
      </div>
      <Nav />
    </header>
  );
};

export default Header;
