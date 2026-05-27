import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <header className=" banner-bg bg-style h-[298px] md:h-[459px] lg:h-[974px] flex items-end justify-left relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-end min-h-[85vh] gap-10 ">
          <div className="text-center flex items-center lg:text-left pt-10 lg:pt-0 h-full ">
            <div>
              <h1 className="font-cormorant text-white text-4xl sm:text-6xl lg:text-6xl leading-[1.05] font-medium max-w-3xl">
                Artist Arafat Hosen
                <br />
                <span className="text-[3.3rem]">The World Through My Eyes</span>
              </h1>

              <p className="text-[#d4b06a] text-base lg:text-lg mt-6 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                For me, art has been a vehicle for a wonderful journey. A
                journey that has included an attempt to master a wide range of
                media; a journey that has challenged me to absorb and express
                life around me;
              </p>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-5 bg-[#d4b06a] text-black font-medium text-lg hover:scale-105 transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-end h-full ">
            <img
              src="https://res.cloudinary.com/softenin/image/upload/v1779731084/arafat/arafat-main_cpke7zeditnew_t2pnvo.png"
              alt="Artist"
              className="w-full "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;

// <!DOCTYPE html>
// <html lang="en">
{
  /* <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Artist Landing Page</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

  <style>
    body{
      font-family: 'Poppins', sans-serif;
    }

    .title-font{
      font-family: 'Cormorant Garamond', serif;
    }

    .hero-bg{
      background-image:
      linear-gradient(rgba(22,22,30,.72), rgba(22,22,30,.72)),
      url('https://res.cloudinary.com/softenin/image/upload/v1765548024/arafat/Dropdown_pyot54.png');

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .glass{
      backdrop-filter: blur(3px);
    }
  </style>
</head>

<body className="bg-[#14141d] overflow-x-hidden">

  <!-- HERO SECTION -->
  <section className="hero-bg min-h-screen w-full relative overflow-hidden">

    <!-- TOP NAV -->
    <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-5 relative z-20">

      <!-- Cart -->
      <div className="flex justify-end items-center text-white text-sm mb-5">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 100 6 3 3 0 000-6zm9 0a3 3 0 100 6 3 3 0 000-6zm-9-3h10.615a1.125 1.125 0 001.09-.86l1.515-6.06a1.125 1.125 0 00-1.09-1.39H5.106M7.5 11.25L5.106 5.273" />
          </svg>
          <span>Cart (0)</span>
        </div>
      </div>

      <!-- Nav -->
      <div className="border-t border-b border-white/20 py-5">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <!-- Menu -->
          <div className="flex flex-wrap items-center gap-6 lg:gap-10 text-white text-sm lg:text-base">

            <a href="#" className="hover:text-[#d4b06a] transition">Arafat Hosen</a>

            <a href="#" className="hover:text-[#d4b06a] transition">Artworks</a>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#d4b06a] transition">
              <span>Activity</span>

              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <a href="#" className="hover:text-[#d4b06a] transition">Blogs</a>

            <a href="#" className="hover:text-[#d4b06a] transition">Contact Us</a>
          </div>

          <!-- Email -->
          <div className="flex items-center gap-3 text-white">

            <div className="w-10 h-10 rounded-full border border-[#d4b06a] flex items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-[#d4b06a]"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">

                <path stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 4.26a2.25 2.25 0 002.22 0L21 8m-18 8h18V8H3v8z" />
              </svg>
            </div>

            <div>
              <p className="text-[#d4b06a] text-sm">Email Us:</p>
              <p className="text-sm lg:text-base break-all">
                artistarafat@gmail.com
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

   
    <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">

      <div className="grid lg:grid-cols-2 items-center min-h-[85vh] gap-10">

        
        <div className="text-center lg:text-left pt-10 lg:pt-0">

          
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="w-16 h-[2px] bg-[#d4b06a]"></div>
            <div className="w-6 h-6 border border-[#d4b06a]"></div>
          </div>

         
          <h1 className="title-font text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold max-w-3xl">

            Artist Arafat Hosen
            <br />
            The World Through My Eyes

          </h1>

          
          <p className="text-[#d4b06a] text-base lg:text-lg mt-6 max-w-2xl leading-relaxed mx-auto lg:mx-0">

            For me, art has been a vehicle for a wonderful journey.
            A journey that has included an attempt to master a wide
            range of media; a journey that has challenged me to absorb
            and express life around me;

          </p>

          
          <div className="mt-10">
            <a href="#"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#d4b06a] text-black font-medium text-lg hover:scale-105 transition duration-300">

              Read More

            </a>
          </div>

        </div>

        
        <div className="relative flex justify-center lg:justify-end items-end">

          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1765548025/arafat/arafat-main_cpke7z.png"
            alt="Artist"
            className="w-full max-w-[700px] object-contain relative z-10"
          />

        </div>

      </div>

    </div>

  </section>

</body>
</html> */
}
