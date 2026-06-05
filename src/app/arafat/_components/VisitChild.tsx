import Image from "next/image";
import React from "react";

const VisitChild = () => {
  return (
    <div className="container my-20">
      <p className="text-justify mb-16">
        For me, art has been a vehicle for a wonderful journey. A journey that
        has included an attempt to master a wide range of media; a journey that
        has challenged me to absorb and express life around me; a journey that
        has required both patience and curiosity above and beyond anything I
        have ever experienced. My art has brought me much closer to my inner
        self. It has helped me to explore my mind and feelings. It has taught me
        a deep appreciation of my environment both physical and human. It has
        taught me tolerance and a love for people; their abilities, their
        feelings and their hopes and dreams. In one sense, my journey has only
        just begun. Where it leads, I do not know and, in fact, it is probably
        best that I allow it to lead me day by day; living life at its fullest
        and within my own boundaries and capacities. Perhaps the richest
        blessing that art has given me are the people whom I have met and
        interacted with along its journey and that is something that continues
        to motivate and drive me to ever expanding new horizons.
      </p>

      <div className="grid grid-cols-3  ">
        <div className="w-full">
          <img
            src={
              "https://res.cloudinary.com/softenin/image/upload/v1772263563/arafat/Photo_abkmjo.jpg"
            }
            width={425}
            height={293}
            className="w-full"
          />
          <p>Watercolor Pleinair</p>
        </div>
        <div>
          <img
            src={
              "https://res.cloudinary.com/softenin/image/upload/v1772263562/arafat/Photo1_kfyicy.jpg"
            }
            width={425}
            height={293}
          />
          <p>Artist Family</p>
        </div>
        <div>
          <img
            src={
              "https://res.cloudinary.com/softenin/image/upload/v1772263562/arafat/Photo3_oewxob.jpg"
            }
            width={425}
            height={293}
          />
          <p>At POPI NGO School</p>
        </div>
      </div>
    </div>
  );
};

export default VisitChild;
