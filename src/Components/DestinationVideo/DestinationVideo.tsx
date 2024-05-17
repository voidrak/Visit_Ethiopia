import React, { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import videoInfoData from "../../Data/videoInfoData";
interface videoInfoData {
  name: string;
  title: string;
  description: string;
  location: string;
  videoSrc: string;
  imgSrc: string;
  id: string;
}
export const DestinationVideo = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string>("001");
  const [videoData, setVideoData] = useState<videoInfoData[]>(videoInfoData);
  const [isList, setIsList] = useState<boolean>(false);

  const ListVideos = videoData.filter((item) => item.id !== currentVideoId);
  const CurrentPlaying = videoData.filter((item) => item.id === currentVideoId);
  function handleVideoSelection(id: string) {
    setCurrentVideoId(id);
  }
  return (
    <div className="h-screen pt-20 sm:pt-24 px-4 sticky bg-bg-color  top-0 left-0">
      <div className="">
        <h1 className="font-extrabold text-3xl xl:text-6xl lg:text-5xl sm:text-4xl text-center font-ClashDisplay">
          {" "}
          Videos To Makeup Your Mind
        </h1>
        <p className="text-center mt-4 lg:text-xl lg:w-[600px] xl:text-2xl  xl:w-[781px] text-gray-300  sm:text-lg sm:w-[510px] mx-auto">
          Here are some videos from the travels we had with our clients enjoy
          the video and book your next travel in your favorite place in ethiopia
        </p>
      </div>
      <div
        onClick={() => {
          setIsList(!isList);
        }}
        className="flex items-center lg:hidden  text-gold-accent  gap-x-2 w-full justify-end mt-8 px-4"
      >
        {isList ? (
          <>
            <IoIosArrowDropleftCircle className="size-[30px]" />
            <p className="">Back</p>
          </>
        ) : (
          <>
            <p className="">More Videos</p>
            <IoIosArrowDroprightCircle className="size-[30px]" />
          </>
        )}
      </div>
      <div className="relative min-[450px]:w-[90%]   lg:mt-8 lg:px-4 lg:container lg:w-full sm:w-[80%] md:w-[70%] mx-auto">
        <div className="video-part lg:grid lg:grid-cols-4 lg:items-center lg:gap-x-4 mt-4">
          <div className="playing-vid col-span-3 flex flex-col max-w-[850px] mx-auto ">
            <video
              src={`${CurrentPlaying[0].videoSrc}`}
              controls
              poster={`${CurrentPlaying[0].imgSrc}`}
              className="rounded-lg"
            >
              Connection Error Please Refresh The Page
            </video>
            <h1 className="font-bold  mt-6 text-lg">
              {CurrentPlaying[0].title}
            </h1>
            <p className="text-gray-300 text-sm mt-3">
              {CurrentPlaying[0].description}
            </p>
            <p className="location mt-1 flex gap-x-3 items-center">
              <svg
                className="w-[12px]  fill-gold-accent"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              {CurrentPlaying[0].location}
            </p>
          </div>
          <div
            className={`list-vid w-full items-center left-0 top-0  lg:hidden  flex flex-col gap-y-3 absolute bg-bg-color ${
              isList ? "" : "hidden"
            } `}
          >
            {ListVideos.map((vid) => (
              <div
                onClick={() => {
                  setIsList(false);
                }}
                className="list-inner  max-w-[500px] md:max-w-[600px] "
                key={vid.name}
              >
                <img
                  src={`${vid.imgSrc}`}
                  onClick={() => handleVideoSelection(vid.id)}
                  className="rounded-lg"
                />
                <div className="vid-info mt-4">
                  <h3 className="text-xl font-bold ">{vid.name}</h3>
                  <p className="text-gray-300 text-base">{vid.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`list-vid w-full items-center pr-2 hidden   lg:grid  gap-y-3   bg-bg-color  `}
          >
            {ListVideos.map((vid) => (
              <div
                onClick={() => {
                  setIsList(false);
                }}
                className="list-inner  max-w-[200px]  "
                key={vid.name}
              >
                <img
                  src={`${vid.imgSrc}`}
                  onClick={() => handleVideoSelection(vid.id)}
                  className="rounded-lg"
                />
                <div className="vid-info mt-4">
                  <h3 className="text-xl font-bold ">{vid.name}</h3>
                  <p className="text-gray-300 text-base lg:hidden">
                    {vid.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
