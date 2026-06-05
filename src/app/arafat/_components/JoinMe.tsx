import Image from "next/image";
import React from "react";

const JoinMe = () => {
  return (
    <div className="bg-theme-black py-24">
      <div className="container grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div>
            <p className="text-justify">
              I have traveled around Asia, looking, learning and creating. I
              have held many exhibitions both in Bangladesh as well as in
              Bhutan. I have my work hanging in several galleries.My subjects
              frequently reflect the unique beauty and composition of rural and
              urban Bangladesh and its people. My current focus has been using
              watercolors. For me it has proven to be a liberating, while at the
              same time, a demanding media. The disciplines of water colours
              seem to better reflect my style as an artist. I understand that,
              one of the amazing characteristics of being an artist, is the
              growth, adaptation, transformation and adventure that this
              profession and gift offers. I can look back and wonder at the many
              different experiences that have moulded me into the person I am
              today.
            </p>

            <p className="text-justify py-8">
              I believe art is more than just paint on canvas or simply a visual
              communication. I see art as a universal language; interpreted and
              felt by all. The emotions and stories that are expressed on canvas
              can be experienced and understood by people of all cultures and
              races. Art is a language; not of words and grammar, but of common
              themes, colours, textures and love. Art speaks to the minds and
              hearts of people, perhaps, even more so than the written word.
            </p>
          </div>
        </div>

        <div className="">
          <img
            src={
              "https://res.cloudinary.com/softenin/image/upload/v1772227330/arafat/arafat-hosen2_wow5fj.png"
            }
            width={535}
            height={539}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinMe;
