import { useEffect, useState } from "react";
import MobileNav from "./HeadingNav/MobileNav";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";

const HeroSection = () => {
  const [count, setCount] = useState<number>(0);

  const [isSearch, setIsSearch] = useState<boolean>(false);
  interface navBar {
    title: string;
    href: string;
  }
  const navBarLink: navBar[] = [
    { title: "HOME", href: "#" },
    {
      title: "BOOK",
      href: "https://ar.trivago.com/en-145/odr/hotels-ethiopia?search=200-19",
    },
    { title: "PACKAGES", href: "https://absoluteethiopia.com/" },
    { title: "HOTELS", href: "https://www.booking.com/country/et.html" },
    { title: "CONTACT", href: "#" },
  ];

  useEffect(() => {
    if (count > 2) {
      return;
    }
    const img = new Image();
    const img2 = new Image();
    img.src = "images/BG-IMG.png";
    img2.src = "images/LallibelaPic.png";
    img.onload = () => {
      setCount(count + 1);
    };
    img2.onload = () => {
      setCount(count + 1);
    };
  }, [count]);
  const textVariants = {
    initial: {
      opacity: 0,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, easeIn, delay: 1.5 },
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

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 3, ease: [0.45, 0, 0.55, 1] },
    },
  };

  return (
    <>
      {count < 1 && (
        <div className="absolute right-[50%]  top-[50%] flex items-center">
          <span className="loader"></span>
        </div>
      )}
      <div
        className={`relative h-screen bg-[url('/images/BG-IMG.png')] bg-cover bg-no-repeat ${
          count > 0 ? "opacity-1" : "opacity-0"
        }`}
      >
        {count > 1 && (
          <>
            <div className="absolute right-0 top-0 z-20 w-full cursor-pointer  ">
              <MobileNav />
              <div className="hidden w-full items-center justify-between bg-transparent p-8 min-[850px]:flex min-[1560px]:p-12">
                <nav className=" ">
                  <ul className="flex items-center gap-x-[15px] xl:gap-x-[22px] ">
                    <li className="mara-logo">
                      <a href="#">
                        <img src="images/MARA.png" alt="mara logo" />
                      </a>
                    </li>
                    {navBarLink.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[17px] hover:text-gold-accent lg:text-2xl xl:text-3xl "
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex items-center gap-4 ">
                  <div
                    className={`}  flex items-center  
                gap-x-2`}
                  >
                    <input
                      type="text"
                      className={`origin-right rounded-md border-none p-1 text-black outline-none transition-all duration-300 ease-easeInSine ${
                        !isSearch ? "scale-x-0" : ""
                      }`}
                    />
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                        fill="white"
                        className="size-[22px]"
                        onClick={() => {
                          setIsSearch(!isSearch);
                        }}
                      >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </div>
                  </div>
                  <form className="text-black ">
                    <select
                      name="auth"
                      id="auth"
                      className="rounded-sm bg-gold-accent p-1 outline-none"
                    >
                      <option value="login">Login</option>
                      <option value="signUp">Sign up</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className="  relative h-full w-full translate-y-8 px-4 sm:translate-y-0  min-[850px]:translate-y-[-10vw]  xl:translate-y-[-8vw]">
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                whileInView={"animate"}
                className="  absolute left-[5vw] top-[40%] z-[1] overflow-hidden  leading-[14vw] tracking-[0.2em] lg:top-[45%] lg:leading-[10vw] min-[1400px]:leading-[12vw] min-[1645px]:top-[40%]"
              >
                <motion.h2
                  variants={textVariants}
                  className="overflow-hidden  text-[10vw] lg:text-[70px] xl:text-[80px] min-[1400px]:text-[90px]  min-[1650px]:text-[100px] min-[1800px]:text-[120px] "
                >
                  DISCOVER
                </motion.h2>
                <motion.h1
                  variants={textVariants}
                  className="font-ClashDisplay text-[18vw]     font-[900]  min-[1400px]:text-[18.5vw]"
                >
                  ETHIOPIA
                </motion.h1>
              </motion.div>
              <div className=" absolute top-[36%] z-10 w-[90vw] max-w-[900px] overflow-x-hidden min-[500px]:left-[5vw] sm:top-[30%] lg:left-[7vw] min-[1128px]:left-[12vw] xl:max-w-[70vw] min-[1400px]:left-[17vw] min-[1400px]:max-w-[62vw]    min-[1645px]:max-w-[60vw]">
                <motion.img
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  src="images/LallibelaPic.png"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HeroSection;
