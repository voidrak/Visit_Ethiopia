const ShouldVisit = () => {
  return (
    <div className=" sticky top-0 left-0 w-screen h-screen bg-[url('images/should_visit_BG.png')] bg-cover bg-no-repeat">
      <div className="  flex  justify-center flex-col  w-full h-full overflow-x-hidden pr-3  mt-16 after:absolute after:top-0 after:left-0 after:bg-gradient-to-br from-transparent to-[#212730] after:-z-[1] isolate relative after:w-full after:h-full   min-[373px]:pr-4   ">
        <div className="flex flex-col items-end ml-auto  sm:max-w-[500px] max-w-[375px] sm:-translate-x-8  xl:-translate-x-16 2xl:-translate-x-24   ">
          <div className=" ">
            <h1 className=" text-right font-ClashDisplay sm:text-5xl   text-3xl">
              WHY SHOULD YOU
            </h1>
            <h1 className="  text-right font-ClashDisplay sm:text-5xl text-3xl">
              VISIT ETHIOPIA
            </h1>
          </div>
          <div className="text-gold-accent font-extrabold text-lg sm:text-xl py-4  ">
            <h2 className="after:w-full after:h-[3px] after:bg-gold-accent relative after:absolute after:top-[50%] after:left-[105%] translate-x-[-105%]">
              Because
            </h2>
          </div>
          <div className="">
            <p className="text-right sm:leading-relaxed text-gray-300 py-5 font-bold text-pretty  ">
              ETHIOPIA IS A CAPTIVATING DESTINATION THAT OFFERS A RICH CULTURAL
              EXPERIENCE. FROM THE ROCK-HEWN CHURCHES OF LALIBELA TO THE ANCIENT
              RUINS OF AKSUM, THE COUNTRY IS STEEPED IN HISTORY. ITS DIVERSE
              LANDSCAPES, INCLUDING THE SIMIEN MOUNTAINS AND THE DANAKIL
              DEPRESSION, ADD TO ITS ALLURE. ETHIOPIA IS A TREASURE TROVE OF
              CULTURAL HERITAGE WAITING TO BE DISCOVERED.
            </p>
          </div>
          <div className="mt-8">
            <img
              src="/images/Button2.png"
              alt=""
              className="w-[200px] sm:w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShouldVisit;
