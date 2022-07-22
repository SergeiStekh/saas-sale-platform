import { useState, useEffect } from "react"
import { useScrollBlock } from "./useBodyScrollBlock"
import { useWindowSize } from "./useWindowSize"

export default function useNavBar() {
  const windowSize = useWindowSize()[0];
  const [blockScroll, allowScroll] = useScrollBlock();
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNavBar = () => {
    setIsNavOpen((prevState) => {
      const currentNavBarState = !prevState;
      currentNavBarState ? blockScroll() : allowScroll();
      return currentNavBarState;
    }); 
  }

  useEffect(() => {
    if (windowSize <= 768) {
      setIsNavOpen(false);
    };
  }, [windowSize]);

  return { isNavOpen, toggleNavBar }
}