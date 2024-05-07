import React from "react";
import MobileNav from "./MobileNav";

const HeadingNav = () => {
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
  return (
    <div className="absolute top-0 right-0 z-20 w-full ">
      <MobileNav />
      <div className="w-full"></div>
    </div>
  );
};

export default HeadingNav;
