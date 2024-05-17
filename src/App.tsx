import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";
import Destination from "./Components/Destination/Destination";
import ShouldVisit from "./Components/ShouldVisit/ShouldVisit";
import { DestinationVideo } from "./Components/DestinationVideo/DestinationVideo";

const App = () => {
  return (
    <ReactLenis root>
      <div className="font-ClashGrotesk relative mb-[100vw]  ">
        <>
          <HeroSection />
          <Features />
          <Destination />
          <ShouldVisit />
          <DestinationVideo />
          {/* <div className="h-screen bg-red-300 sticky top-0 left-0"></div> */}
        </>
      </div>
    </ReactLenis>
  );
};
export default App;
