import React, { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";

const App = () => {
  return (
    <div className="font-ClashGrotesk  mb-[100vw]  ">
      <>
        <HeroSection />
        <Features />
      </>
    </div>
  );
};
export default App;
