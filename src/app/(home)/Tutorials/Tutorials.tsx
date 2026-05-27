const Tutorials = () => {
  return (
    <div className="bg-theme-black">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16 my-10">
          <div className="flex justify-between ">
            <div>
              <h4 className="font-cormorant mb-2">Tutorials</h4>
              <img
                src={
                  "https://res.cloudinary.com/softenin/image/upload/v1772224128/arafat/Iocn_kknvan.png"
                }
                width={95}
                height={44}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/softenin/image/upload/v1772224128/arafat/Line_b6vu0w.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have su alteration in some form, by injected
              humour, oir randomised workds which don't look even slightly
              believable.
            </p>
          </div>
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
    </div>
  );
};

export default Tutorials;
