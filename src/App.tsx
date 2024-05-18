import { ReactLenis } from "lenis/react";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";
import Destination from "./Components/Destination/Destination";
import ShouldVisit from "./Components/ShouldVisit/ShouldVisit";
import { DestinationVideo } from "./Components/DestinationVideo/DestinationVideo";
import DestinationSearch from "./Components/DestinationSearch/DestinationSearch";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative font-ClashGrotesk   ">
        <HeroSection />
        <Features />
        <Destination />
        <ShouldVisit />
        <DestinationVideo />
        <DestinationSearch />
        <Footer />
      </div>
    </ReactLenis>
  );
};
export default App;
