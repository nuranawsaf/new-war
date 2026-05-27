import React from "react";
import NavMenu from "./nav-menu";
import TopNav from "./top-nav";

const Navbar = () => {
  return (
    <div className="relative">
      <div className=" absolute top-0 left-0 right-0 py-8 z-50">
        <div className="lg:block hidden">
          <TopNav />
        </div>

        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
