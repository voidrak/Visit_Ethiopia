import { useRef, useEffect } from "react";
import { animate, motion, stagger } from "framer-motion";
import { easeIn } from "framer-motion/dom";
const MainHero = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, easeIn },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className="  px-4 w-full h-full relative translate-y-8 min-[850px]:translate-y-[-10vw]  sm:translate-y-0  xl:translate-y-[-8vw]">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="  overflow-hidden leading-[14vw] lg:leading-[10vw] min-[1400px]:leading-[12vw] lg:top-[45%]  tracking-[0.2em] z-[1] absolute top-[40%] left-[5vw] min-[1645px]:top-[40%]"
      >
        <motion.h2
          variants={textVariants}
          className="text-[10vw]  overflow-hidden min-[1400px]:text-[90px] min-[1650px]:text-[100px] min-[1800px]:text-[120px]  lg:text-[70px] xl:text-[80px] "
        >
          DISCOVER
        </motion.h2>
        <motion.h1
          variants={textVariants}
          className="text-[18vw] min-[1400px]:text-[18.5vw]     font-ClashDisplay  font-[900]"
        >
          ETHIOPIA
        </motion.h1>
      </motion.div>
      <div className=" overflow-x-hidden absolute top-[36%] sm:top-[30%] min-[500px]:left-[5vw] lg:left-[7vw] z-10 w-[90vw] max-w-[900px] min-[1128px]:left-[12vw] xl:max-w-[70vw] min-[1400px]:max-w-[65vw] min-[1560px]:max-w-[63vw] min-[1645px]:max-w-[60vw]  min-[1400px]:left-[17vw]">
        <img src="images/LallibelaPic.png" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default MainHero;
