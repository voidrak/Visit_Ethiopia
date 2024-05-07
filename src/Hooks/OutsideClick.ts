import { useEffect, useState, RefObject } from "react";

export default function OutsideClick(ref: RefObject<HTMLElement>): boolean {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return isClicked;
}
