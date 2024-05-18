import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Curve from "./Curve";
import OutsideClick from "../../../Hooks/OutsideClick";
const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  interface navBar {
    title: string;
    href: string;
  }

  const navBarLink: navBar[] = [
    { title: "Home", href: "#" },
    { title: "Book", href: "#" },
    { title: "PACKAGES", href: "#" },
    { title: "HOTELS", href: "#" },
    { title: "CONTACT", href: "#" },
  ];

  useEffect(() => {
    if (isHovered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHovered]);

  const cartOutsideClicked = OutsideClick(navRef);

  useEffect(() => {
    if (cartOutsideClicked) {
      setIsNavOpen(false);
    }
  }, [cartOutsideClicked]);

  const menuSlide = {
    initial: {
      x: "calc(100% + 100px)",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: {
      x: "80px",
    },
    enter: (i: number) => ({
      x: "0px",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
    }),
    exit: (i: number) => ({
      x: "80px",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.07 * i },
    }),
  };

  return (
    <div
      ref={navRef}
      className=" fixed right-0 top-0 z-50 overscroll-contain min-[850px]:hidden   "
    >
      <div
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className=" bg-first-accent-color fixed right-2 top-0 z-40 m-[20px]  flex h-[45px] w-[45px] items-center justify-center rounded-full sm:h-[55px] sm:w-[55px] lg:h-[70px] lg:w-[70px]  xl:h-[80px] xl:w-[80px] "
      >
        <div className={`  `}>
          <svg
            className={`ham hamRotate ham1 ${
              isNavOpen ? "rotate-45" : " "
            }  size-[60px]  `}
            viewBox="0 0 100 100"
          >
            <path
              className={`line top  `}
              style={{ strokeDashoffset: ` ${isNavOpen ? " -98px" : " "}` }}
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              style={{ strokeDashoffset: ` ${isNavOpen ? " -138px" : " "}` }}
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isNavOpen && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-text-color-bold h-[100vh] w-[100vw] max-w-[481px]  bg-bg-color "
          >
            <div className="   flex justify-between p-[100px]">
              <div className="  mt-20 flex w-full flex-col gap-4 text-[56px]">
                <div className="  border-text-color-light border-b text-base  ">
                  <p className="text-text-color-light pb-2">Navigation</p>
                </div>
                {navBarLink.map((item, index) => (
                  <motion.a
                    onClick={() => {
                      setIsNavOpen(false);
                      setIsHovered(false);
                    }}
                    key={index}
                    custom={index}
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    href={item.href}
                    className=" duration-400   z-10 text-[42px] font-[300] transition-all first-letter:uppercase hover:font-semibold hover:text-gold-accent"
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
