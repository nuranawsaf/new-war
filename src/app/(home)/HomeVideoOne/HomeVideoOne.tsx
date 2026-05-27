import Image from "next/image";
import React from "react";

const HomeVideoOne = () => {
  return (
    <div className="text-center py-16">
      <div className="py-8">
        <h4 className="font-cormorant mb-2">
          Watercolour Insights from Arafat
        </h4>
        <img
          src={
            "https://res.cloudinary.com/softenin/image/upload/v1772207060/arafat/Sep_w162ip.png"
          }
          width={95}
          height={44}
        />
      </div>

      <div className="container flex justify-center ">
        <iframe
          className=" w-[900px] h-[500px] mb-32"
          src="https://www.youtube.com/embed/B_GYEk6rwOo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomeVideoOne;
