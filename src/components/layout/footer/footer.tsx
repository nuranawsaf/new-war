import React from "react";

import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

import FooterContact from "./FooterContact/FooterContact";
import FooterPractice from "./FooterPractice/FooterPractice";
import FooterUtility from "./FooterUtility/FooterUtility";

const Footer = () => {
  return (
    <div className="bg-secondary py-14 lg:py-36">
      <div className="px-6 container">
        <div className="flex justify-between items-center gap-11">
          <div className="lg:block hidden">
            <img
              src="https://res.cloudinary.com/softenin/image/upload/v1771705222/arafat/left_uvrsnu.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://res.cloudinary.com/softenin/image/upload/v1765876424/arafat/main-logo_ycwg7s.png"
              alt=""
            />
          </div>
          <div className="lg:block hidden ">
            <img
              src="https://res.cloudinary.com/softenin/image/upload/v1771705221/arafat/right_mk92d9.png"
              alt=""
            />
          </div>
        </div>

        <div className="mt-7 lg:mt-20 lg:flex justify-between ">
          <div>
            <FooterUtility />
          </div>
          <div>
            <FooterPractice />
          </div>
          <div>
            <FooterContact />
          </div>
        </div>

        <div className=" lg:flex justify-between items-center border-t border-b border-white border-opacity-10 py-6 mt-20">
          <div className="flex justify-center">
            <div className="flex items-center">
              <p className="text-primary">Follow:</p>
              <div className="flex justify-center items-center gap-6 py-5 px-4 ">
                <BsInstagram />
                <BsFacebook />
                <BsTwitter />
                <BsPinterest />
              </div>
            </div>
          </div>

          <div className="order-first">
            <p>
              Copyright © <span className="text-primary">Arafat Hosen</span> |
              Designed by <span className="text-primary">Tanjina Hemi</span>{" "}
              Templates - Powered by Webflow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
