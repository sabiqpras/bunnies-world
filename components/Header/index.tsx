import React from "react";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="grid grid-cols-2 ">
      <div className="font-bold">Bunnies World</div>
      <Nav />
    </header>
  );
};

export default Header;
