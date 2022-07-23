import { useState, useEffect } from "react"
import { useScrollBlock } from "./useBodyScrollBlock"
import { useWindowSize } from "./useWindowSize"

export default function useMobileMenu() {
  const windowSize = useWindowSize()[0];
  const [blockScroll, allowScroll] = useScrollBlock();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleNavBarMenu = () => {
    setIsMobileMenuOpen((prevState) => {
      const currentNavBarState = !prevState;
      currentNavBarState ? blockScroll() : allowScroll();
      return currentNavBarState;
    }); 
  }

  useEffect(() => {
    if (windowSize <= 768) {
      setIsMobileMenuOpen(false);
    };
  }, [windowSize]);

  return { isMobileMenuOpen, toggleNavBarMenu }
}