import Image from "next/image";
import React from "react";

const PaintMediate = () => {
  return (
    <div className="container my-32">
      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <img
            src={
              "https://res.cloudinary.com/softenin/image/upload/v1772226875/arafat/arafat-hosen_tscqrb.png"
            }
            width={539}
            height={708}
          />
        </div>
        <div className="col-span-2">
          <h4 className="font-cormorant mb-2">I Paint to Meditate</h4>
          <img
            src={
              "https://res.cloudinary.com/softenin/image/upload/v1772224128/arafat/Iocn_kknvan.png"
            }
            width={95}
            height={44}
          />

          <div>
            <p className="text-justify">
              Growing up in Kishoreganj, North of Dhaka, Bangladesh, within a
              simple lifestyle among honest village folk; blessed by the
              abundant gifts of Mother Nature; with the green and golden rice
              and the vibrant yellow of the mustard; and surrounded by
              tributaries of the mighty Brahmaputra and Meghna rivers
              crisscrossing the land; looking back, it is not surprising that,
              from an early age, I was drawn to the pencils and brushes of an
              artist. Painting and drawing became my passion.
            </p>

            <p className="text-justify py-8">
              After completing my matriculation, in 2003 I joined Shanto Mariam
              University of Creative Technology, where I studied and absorbed
              wonderful creativity which year by year translated into, firstly
              portraits, then street scenes, still life; rural life on river and
              water; and, more recently, graphic and modular design. My media
              has been varied using water colour, acrylic, oils, pastels,
              graphite pencils, charcoal and digital art on the computer.
            </p>

            <p className="text-justify">
              Having completed my four years Bachelor’s degree, I rejoined the
              University as a lecturer and have been teaching and mentoring
              students since 2009. I love being in the classroom and working
              with younger minds, helping to mold their creative abilities to
              enhance natural talent combined with an inner discipline and
              curiosity and finally to see the results of all that hard work and
              the joy in their faces. Teaching is an amazing privilege; it is
              another one of my passions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintMediate;
