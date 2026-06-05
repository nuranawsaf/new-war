import React from "react";
import { artdata } from "./artwork-data";

const Artwork = () => {
  return (
    <div className="container py-20 lg:py-40 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-14 items-center ">
        <div className="order-1 lg:order-2 col-span-2">
          <h2 className="text-white text-3xl md:text-4xl font-serif mb-4">
            Artworks
          </h2>
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1772224128/arafat/Iocn_kknvan.png"
            alt=""
          />

          <p className="text-gray-300 my-10 lg:my-16 leading-relaxed text-sm text-justify md:text-base ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </p>
        </div>

        <div className="order-2 lg:order-1  w-full h-full">
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1765915137/arafat/artwork/Image4_nzhkgn.png"
            alt=""
            className="w-full h-64 md:h-72 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 mt-4 lg:mt-0">
        {artdata.map((item) => (
          <div key={item.id} className="">
            <img className="h-full w-full py-6" src={item.img} alt="" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/artworks"
          className="border border-[#b89552] text-white px-10 py-4 hover:bg-[#b89552] hover:text-black transition duration-300"
        >
          See More Artworks
        </a>
      </div>
    </div>
  );
};

export default Artwork;
