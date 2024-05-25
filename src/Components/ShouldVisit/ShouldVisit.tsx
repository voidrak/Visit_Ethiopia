import { LazyLoadImage } from "react-lazy-load-image-component";
const ShouldVisit = () => {
  return (
    <div className="  relative h-screen w-full   bg-cover bg-no-repeat">
      <div className="absolute left-0 top-0 z-[-1] h-full w-full ">
        <LazyLoadImage
          src="/images/should_visit_BG.webp"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="relative  isolate  z-10 mt-16  flex h-full w-full flex-col  justify-center overflow-x-hidden from-transparent to-[#212730] pr-3 after:absolute after:left-0 after:top-0 after:-z-[1] after:h-full after:w-full after:bg-gradient-to-br   min-[373px]:pr-4   ">
        <div className="ml-auto flex max-w-[375px] flex-col  items-end sm:max-w-[500px] sm:-translate-x-8  xl:-translate-x-16 2xl:-translate-x-24   ">
          <div className=" ">
            <h1 className=" text-right font-ClashDisplay text-3xl   sm:text-5xl">
              WHY SHOULD YOU
            </h1>
            <h1 className="  text-right font-ClashDisplay text-3xl sm:text-5xl">
              VISIT ETHIOPIA
            </h1>
          </div>
          <div className="py-4 text-lg font-extrabold text-gold-accent sm:text-xl  ">
            <h2 className="relative translate-x-[-105%] after:absolute after:left-[105%] after:top-[50%] after:h-[3px] after:w-full after:bg-gold-accent">
              Because
            </h2>
          </div>
          <div className="">
            <p className="text-pretty py-5 text-right font-bold text-gray-300 sm:leading-relaxed  ">
              ETHIOPIA IS A CAPTIVATING DESTINATION THAT OFFERS A RICH CULTURAL
              EXPERIENCE. FROM THE ROCK-HEWN CHURCHES OF LALIBELA TO THE ANCIENT
              RUINS OF AKSUM, THE COUNTRY IS STEEPED IN HISTORY. ITS DIVERSE
              LANDSCAPES, INCLUDING THE SIMIEN MOUNTAINS AND THE DANAKIL
              DEPRESSION, ADD TO ITS ALLURE. ETHIOPIA IS A TREASURE TROVE OF
              CULTURAL HERITAGE WAITING TO BE DISCOVERED.
            </p>
          </div>
          <div className="mt-8">
            <LazyLoadImage
              src="/images/Button2.png"
              alt="VISIT ETHIOPIA backgroundImage"
              className="w-[200px] sm:w-[250px]"
              placeholderSrc="/images/should_visit_BG.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShouldVisit;
