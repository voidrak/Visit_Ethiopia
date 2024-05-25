import { LazyLoadImage } from "react-lazy-load-image-component";
const DestinationSearch = () => {
  return (
    <div className="       mx-auto mt-16 flex w-fit   flex-col justify-center bg-bg-color px-4 sm:mt-32 md:mt-48 lg:flex-row  lg:items-center  lg:px-16  ">
      <div className="flex flex-col items-center">
        <h1 className="font-ClashDisplay text-2xl font-extrabold  min-[450px]:text-3xl sm:text-4xl ">
          Trusted By The Peoples
        </h1>
        <h1 className="font-ClashDisplay text-2xl font-extrabold  min-[450px]:text-3xl sm:text-4xl ">
          Around The World
        </h1>
        <div className="search flex items-center gap-x-3 py-10 ">
          <div className="search-input  sm: flex items-center rounded-md bg-white py-3 pl-1 min-[450px]:px-5 sm:w-[413px] sm:py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[16px]"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type="text"
              placeholder="Search your destination"
              className=" w-full border-none  pl-2 text-lg text-black   outline-none"
            />
          </div>

          <div className="rounded-lg bg-gold-accent  p-2 filter sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[35px] rotate-90 "
            >
              <path
                fill="#ffffff"
                d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="airplane-img mx-auto xl:w-[650px] 2xl:w-[750px] ">
        <LazyLoadImage
          src="images/airplane-img.webp"
          alt="airplane image"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DestinationSearch;
