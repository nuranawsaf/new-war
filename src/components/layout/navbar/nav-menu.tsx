"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";

const NavMenu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="w-full S lg:border-b lg:border-t lg:py-3 border-theme-gray  text-white">
      <div className=" lg:px-6">
        <div className="flex items-center justify-between  container">
          <nav className=" hidden lg:flex items-center gap-10 text-base font-outfit ">
            <a href="/artworks" className="hover:text-primary duration-300">
              Artworks
            </a>

            <a href="/activity" className="hover:text-primary duration-300">
              Activity
            </a>

            <a href="/blogs" className="hover:text-primary duration-300">
              Blogs
            </a>

            <a href="/contact" className="hover:text-primary duration-300">
              Contact Us
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                ✉
              </div>

              <div className=" leading-tight">
                <p className="text-primary text-base">Email Us:</p>
                <p className="text-sm">artistarafat@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="w-full flex justify-between lg:hidden py-2 bg-primary ">
          <div>
            <Link href={"/"}>
              <img width={150} src="/images/main-logo_ycwg7s.png" alt="" />
            </Link>
          </div>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden cursor-pointer"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden bg-theme-gray backdrop-blur-md border-b border-white/10">
            <nav className="flex flex-col py-6 space-y-5 text-start">
              <a href="/artworks" className="hover:text-primary">
                Artworks
              </a>

              <a href="/activity" className="hover:text-primary">
                Activity
              </a>

              <a href="/blogs" className="hover:text-primary">
                Blogs
              </a>

              <a href="/contact" className="hover:text-primary">
                Contact Us
              </a>

              {/* Mobile Cart */}
              <div className="flex  items-center gap-2 pt-4">
                <ShoppingCart size={18} />
                <span>Cart (0)</span>
              </div>

              {/* Mobile Email */}
              <div className="pt-2 text-sm">
                <p className="text-primary">Email Us:</p>
                <p>artistarafat@gmail.com</p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
