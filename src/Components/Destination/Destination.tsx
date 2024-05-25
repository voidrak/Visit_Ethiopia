import { useState } from "react";
import destinationData from "../../Data/destinationData";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface data {
  name: string;
  location: string;
  description: string;
  img: string;
  category: string;
  link: string;
}
const Destination = () => {
  const [destinations, setDestinations] = useState<data[]>(destinationData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<string>("All");
  const windowSize = window.innerWidth;
  let indexMul: number;
  if (windowSize < 1025) {
    indexMul = 0;
  } else if (windowSize <= 1200) {
    indexMul = 94;
  } else if (windowSize <= 1400) {
    indexMul = 84;
  } else if (windowSize <= 1560) {
    indexMul = 80;
  } else if (windowSize <= 1650) {
    indexMul = 70;
  } else if (windowSize <= 1750) {
    indexMul = 65;
  } else if (windowSize <= 1850) {
    indexMul = 65;
  } else if (windowSize <= 1950) {
    indexMul = 55;
  }
  function updateIndex(newIndex: number) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= destinations.length - 1) {
      newIndex = destinations.length - 2;
    }

    setCurrentIndex(newIndex);
  }

  function filterItems(cat: string) {
    const newItems = destinations.filter((items) => items.category === cat);
    setDestinations(newItems);
  }

  const mappedItems = destinations.map((card: data) => (
    <div
      className="slider-card relative  mx-auto flex h-[555px] min-w-[300px] max-w-[356px] flex-col justify-end rounded-[30px] border border-gray-700 from-transparent to-[#161b23]  transition-all  duration-300 ease-linear after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-[30px] after:bg-gradient-to-b min-[373px]:min-w-[355px] "
      key={card.name}
      style={{
        transform: `translate(-${currentIndex * indexMul}%)`,
        backgroundImage: `url(${card.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card-info space-y-1 px-2">
        <h1 className="text-4xl font-extrabold">{card.name}</h1>
        <p className="card-location flex gap-x-3 font-bold uppercase text-gold-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-[13px] fill-gold-accent"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          {card.location}
        </p>
        <p className="card-description  text-gray-300">{card.description}</p>
      </div>
      <button className="book-now">
        <a href={`${card.link}`} target="_blank" rel="noopener noreferrer">
          <img src="images/Book Now.png" alt="book now" />
        </a>
      </button>
    </div>
  ));
  return (
    <div className="mx-auto  mt-16 pl-2   pr-3">
      <div className="controls-btn flex items-center  justify-between  px-4 lg:px-16 2xl:px-[6rem]">
        <div className="filter-btn space-x-8">
          <button
            className={`${
              activeButton === "All" ? "underline decoration-gold-accent" : " "
            }`}
            onClick={() => {
              setDestinations(destinationData);
              setActiveButton("All");
            }}
          >
            <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl  ">
              All
            </h3>
          </button>
          <button
            className={`${
              activeButton === "Nearby"
                ? "underline decoration-gold-accent"
                : " "
            }`}
            onClick={() => {
              filterItems("Near by");
              setActiveButton("Nearby");
            }}
          >
            <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl   ">
              Near By
            </h3>
          </button>
        </div>

        <div className="swipe-btn   mr-2 hidden gap-x-4 lg:flex">
          <button>
            <LazyLoadImage
              src="images/pervious_arrow.webp"
              alt="pervious arrow"
              className="pervious-arrow  w-[50px] lg:w-[70px] 2xl:w-[85px]"
              onClick={() => {
                updateIndex(currentIndex - 1);
              }}
            />
          </button>
          <button>
            <LazyLoadImage
              src="images/next_arrow.webp"
              alt="next arrow"
              className="next-arrow w-[50px] lg:w-[70px] 2xl:w-[85px]"
              onClick={() => {
                updateIndex(currentIndex + 1);
              }}
            />
          </button>
        </div>
      </div>
      <h1 className="card-title mb-8 ml-2 mt-8 text-3xl font-extrabold  tracking-widest lg:px-16 xl:text-4xl 2xl:px-[6rem]">
        Popular Destination
      </h1>
      <div className=" grid gap-x-4 gap-y-8 overflow-x-hidden md:grid-cols-2  lg:ml-16 lg:flex ">
        {mappedItems}
      </div>
    </div>
  );
};

export default Destination;
