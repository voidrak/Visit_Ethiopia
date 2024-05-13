import React from "react";

const MainHero = () => {
  return (
    <div className="  px-4 w-full h-full relative translate-y-8 min-[850px]:translate-y-[-10vw]  sm:translate-y-0  xl:translate-y-[-8vw]">
      <div className="leading-[14vw] lg:leading-[10vw] min-[1400px]:leading-[12vw] lg:top-[45%]  tracking-[0.2em] z-[1] absolute top-[40%] left-[5vw] min-[1645px]:top-[40%]">
        <h2 className="text-[10vw] min-[1400px]:text-[90px] min-[1650px]:text-[100px] min-[1800px]:text-[120px]  lg:text-[70px] xl:text-[80px] ">
          DISCOVER
        </h2>
        <h1 className="text-[18vw] min-[1400px]:text-[18.5vw]     font-ClashDisplay  font-[900]">
          ETHIOPIA
        </h1>
      </div>
      <div className=" overflow-x-hidden absolute top-[36%] sm:top-[30%] min-[500px]:left-[5vw] lg:left-[7vw] z-10 w-[90vw] max-w-[900px] min-[1128px]:left-[12vw] xl:max-w-[70vw] min-[1400px]:max-w-[65vw] min-[1560px]:max-w-[63vw] min-[1645px]:max-w-[60vw]  min-[1400px]:left-[17vw]">
        <img src="images/LallibelaPic.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default MainHero;
