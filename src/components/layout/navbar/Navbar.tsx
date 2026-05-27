import React from "react";
import NavMenu from "./nav-menu";
import TopNav from "./top-nav";

const Navbar = () => {
  return (
    <div className="">
      <div className="lg:block hidden">
        <TopNav />
      </div>

      <NavMenu />
    </div>
  );
};

export default Navbar;
