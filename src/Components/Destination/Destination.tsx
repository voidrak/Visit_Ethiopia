import { useState } from "react";
import destinationData from "../../Data/destinationData";
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
  if (windowSize <= 1200) {
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
      className="slider-card relative  mx-auto rounded-[30px] transition-all duration-300 ease-linear flex flex-col h-[555px] justify-end min-w-[300px] min-[373px]:min-w-[355px] max-w-[356px]  after:absolute  after:bg-gradient-to-b from-transparent to-[#161b23] after:w-full after:h-full after:top-0 after:left-0 after:-z-10 after:rounded-[30px] border border-gray-700 "
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
        <h1 className="font-extrabold text-4xl">{card.name}</h1>
        <p className="card-location flex gap-x-3 text-gold-accent uppercase font-bold">
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
  console.log(activeButton);
  return (
    <div className="mt-16    mx-auto">
      <div className="controls-btn lg:px-16 px-4  2xl:px-[6rem]  flex justify-between items-center">
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
            <h3 className="font-semibold text-xl lg:text-2xl xl:text-3xl  ">
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
            <h3 className="font-semibold text-xl lg:text-2xl xl:text-3xl   ">
              Near By
            </h3>
          </button>
        </div>

        <div className="swipe-btn   flex gap-x-4 mr-2">
          <button>
            <img
              src="images/pervious_arrow.png"
              alt="pervious arrow"
              className="pervious-arrow  lg:w-[70px] 2xl:w-[85px] w-[50px]"
              onClick={() => {
                updateIndex(currentIndex - 1);
              }}
            />
          </button>
          <button>
            <img
              src="images/next_arrow.png"
              alt="next arrow"
              className="next-arrow lg:w-[70px] 2xl:w-[85px] w-[50px]"
              onClick={() => {
                updateIndex(currentIndex + 1);
              }}
            />
          </button>
        </div>
      </div>
      <h1 className="card-title mt-8 mb-8 ml-2 lg:px-16 2xl:px-[6rem]  font-extrabold tracking-widest text-3xl xl:text-4xl">
        Popular Destination
      </h1>
      <div className=" grid md:grid-cols-2 gap-x-4 lg:flex lg:ml-16  overflow-x-hidden gap-y-8 ">
        {mappedItems}
      </div>
    </div>
  );
};

export default Destination;
