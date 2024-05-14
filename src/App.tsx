import React, { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";

const App = () => {
  const [isLoad, setLoad] = useState<boolean>(false);
  useEffect(() => {
    console.log(isLoad);
  }, [isLoad]);
  return (
    <div className="font-ClashGrotesk  mb-[100vw] ">
      <img
        onLoad={() => {
          setLoad(true);
        }}
        src="public/images/BG-IMG.png"
        alt=""
        className="absolute top-0 left-0 opacity-0"
      />
      isLoad?( : <div className="loader"></div> ):(
      <HeroSection isLoad={isLoad} setLoad={setLoad} />
      <Features />)
    </div>
  );
};
export default App;
