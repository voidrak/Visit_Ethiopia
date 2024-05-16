import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";
import Destination from "./Components/Destination/Destination";

const App = () => {
  return (
    <div className="font-ClashGrotesk  mb-[100vw]  ">
      <>
        <HeroSection />
        <Features />
        <Destination />
      </>
    </div>
  );
};
export default App;
