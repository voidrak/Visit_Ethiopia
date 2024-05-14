import React, { useEffect } from "react";
import HeadingNav from "./HeadingNav/HeadingNav";
import MainHero from "./MainHero";

interface Props {
  isLoad: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection = ({ isLoad, setLoad }: Props) => {
  // useEffect(() => {
  //   console.log(isLoad);
  //   setLoad(true);
  // }, []);
  return (
    <div className=" relative  h-screen bg-[url('images/BG-IMG.png')]  bg-no-repeat bg-cover   flex flex-col items-center justify-center  ">
      <HeadingNav />
      <MainHero />
    </div>
  );
};

export default HeroSection;
