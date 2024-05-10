import React from "react";

const MainHero = () => {
  return (
    <div className="  px-4 w-full h-full relative">
      <div className="leading-[19vw]  tracking-[0.2em] z-[1] absolute top-[40%] left-[5vw]">
        <h2 className="text-[55px] min-[360px]:text-clamp-small font-sans   font-light">
          DISCOVER
        </h2>
        <h1 className="text-[63px] min-[360px]:text-clamp-large font-SupremeRegular  font-extrabold">
          ETHIOPIA
        </h1>
      </div>
      <div className="absolute top-[33%] left-[0vw] z-10 w-[90vw] max-w-[850px]">
        <img src="images/LallibelaPic.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default MainHero;
