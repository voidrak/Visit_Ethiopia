import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";
import Destination from "./Components/Destination/Destination";
import ShouldVisit from "./Components/ShouldVisit/ShouldVisit";

const App = () => {
  return (
    <ReactLenis root>
      <div className="font-ClashGrotesk  overflow-x-hidden mb-[100vw]  ">
        <>
          <HeroSection />
          <Features />
          <Destination />
          <ShouldVisit />
          {/* <div className="w-screen h-screen sticky top-0 left-0 bg-cover bg-violet-300 text-white z-10 bg-[url('/images/BG-IMG.png')]">
          text
        </div> */}
        </>
      </div>
    </ReactLenis>
  );
};
export default App;
