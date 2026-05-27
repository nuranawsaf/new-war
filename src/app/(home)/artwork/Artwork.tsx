import React from "react";
import { artdata } from "./artwork-data";

const Artwork = () => {
  return (
    <div className="container mt-24 lg:mt-40">
      <div className="grid lg:grid-cols-3  gap-14 mb-10">
        <div className="">
          <img
            className="w-full"
            src="https://res.cloudinary.com/softenin/image/upload/v1765915137/arafat/artwork/Image4_nzhkgn.png"
            alt=""
          />
        </div>
        <div className=" lg:col-span-2">
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1765915571/arafat/artwork/Content_fbpevn.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-14">
        {artdata.map((item) => (
          <div key={item.id} className="">
            <img className="h-full w-full" src={item.img} alt="" />
          </div>
        ))}
      </div>

      <div className="text-center my-16">
        <button className="border-primary border py-5 px-10">
          See more Artworks
        </button>
      </div>
    </div>
  );
};

export default Artwork;
