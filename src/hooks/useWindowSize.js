import { useState, useLayoutEffect } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);

  }, [size]);
  return size;
};