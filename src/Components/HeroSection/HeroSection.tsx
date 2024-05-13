import React from "react";
import HeadingNav from "./HeadingNav/HeadingNav";
import MainHero from "./MainHero";

const HeroSection = () => {
  return (
    <div className=" relative  h-screen bg-[url('images/BG-IMG.png')]  bg-no-repeat bg-cover   flex flex-col items-center justify-center  ">
      <HeadingNav />
      <MainHero />
    </div>
  );
};

export default HeroSection;
