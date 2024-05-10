import React from "react";
import HeadingNav from "./HeadingNav/HeadingNav";
import MainHero from "./MainHero";

const HeroSection = () => {
  return (
    <div className=" h-screen bg-[url('images/BG-IMG.png')]  bg-no-repeat bg-cover mb-[350vh] flex flex-col items-center justify-center  ">
      <HeadingNav />
      <MainHero />
    </div>
  );
};

export default HeroSection;
