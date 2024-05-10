import { useState } from "react";
import MobileNav from "./MobileNav";

const HeadingNav = () => {
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
  return (
    <div className="absolute top-0 right-0 z-20 w-full cursor-pointer  ">
      <MobileNav />
      <div className="w-full bg-transparent min-[1560px]:p-12 p-8 min-[850px]:flex hidden items-center justify-between">
        <nav className=" ">
          <ul className="flex gap-x-[15px] xl:gap-x-[22px] items-center ">
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
                  className="text-[17px] lg:text-2xl xl:text-3xl hover:text-gold-accent "
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 items-center ">
          <div
            className={`flex  items-center gap-x-2  
            }`}
          >
            <input
              type="text"
              className={`rounded-md p-1 transition-all ease-easeInSine duration-300 origin-right text-black border-none outline-none ${
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
              className="outline-none bg-gold-accent p-1 rounded-sm"
            >
              <option value="login">Login</option>
              <option value="signUp">Sign up</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeadingNav;
