import React from "react";
import shape1 from "../../assets/img5.png";
import shape4 from "../../assets/img1.png";
import bg_img from "../../assets/pista_vanila_img.png";
import shape3 from "../../assets/Strwbarry Chikki.png";
 import "./AboutSection.css";

export default function AboutSectionHome() {
  return (
    <section className="relative py-[140px] bg-white overflow-hidden">
      <img src={shape1} className="absolute top-10 left-0 hidden xl:block h-[552px] w-[432px]" alt="" />
      <img src={shape3} className="absolute bottom-30 left-[90px] rotate hidden xl:block h-[358px] w-[362px] rounded-full" alt="" />
      <img src={shape4} className="absolute top-10 right-0 hidden xl:block h-[552px] w-[432px]" alt="" />
      <img src={shape3} className="absolute bottom-30 right-[90px] rotate hidden xl:block h-[350px] w-[355px] rounded-full" alt="" />

      <div className="container mx-auto relative mt-10">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={bg_img}
            alt="bg sweets"
            className="
              w-[520px]
              rounded-full
              object-cover
              max-lg:w-[380px]
            "
          />
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto text-center">
          <div className="text-[#E09F40] font-bold tracking-[2px] mb-3 text-[18px]">
            ABOUT US
          </div>

          <h2 className="text-[40px] font-bold text-[#111] mb-5 leading-tight max-lg:text-[32px]">
            Sweet Moments Made With <br />
            Love & Tradition
          </h2>

          <p className="text-[#666] text-[16px] leading-[1.8] mb-8">
            We create delicious traditional sweets using the finest ingredients.
            Every bite is crafted with care, purity, and authentic taste to make
            your celebrations more joyful and memorable.
          </p>

          <a
            href="/"
            className="
              inline-flex items-center gap-2
              px-8 py-3
              bg-[#E09F40]
              text-white
              font-semibold
              rounded-md
              hover:bg-[#cf8f32]
              transition
            "
          >
            ORDER NOW
          </a>
        </div>
      </div>
    </section>
  );
}
