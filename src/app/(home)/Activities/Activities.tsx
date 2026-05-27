import Image from "next/image";
import React from "react";

const Activities = () => {
  return (
    <div className=" py-16 container">
      <div className="py-8 text-center">
        <h4 className="font-cormorant mb-2">Activities</h4>
        <img
          src={
            "https://res.cloudinary.com/softenin/image/upload/v1772207060/arafat/Sep_w162ip.png"
          }
          width={95}
          height={44}
        />
      </div>

      <div>
        <div className="grid lg:gap-12 lg:grid-cols-2">
          <div>
            <img
              src={
                "https://res.cloudinary.com/softenin/image/upload/v1772209196/arafat/Image_vpqc43.png"
              }
              width={696}
              height={463}
            />
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-primary border-b-[1px] border-opacity-20 pb-4">
                3rd watercolor Solo Exhibition | July 24, 2022{" "}
              </p>

              <h4 className="font-cormorant my-3">Activities</h4>

              <p className="pb-4">
                There are of Lorem Ipsum available, but the majority have su
                alteration in some form, by injected oir which don't look even
                slightly believable.
              </p>

              <a className="text-primary underline" href="">
                See more Activities
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
