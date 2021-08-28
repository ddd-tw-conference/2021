import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useState } from "react";

const useWindowSizeCsr = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [size, setSize] = useState(() => [0, 0] as [number, number]);
  useEffect(() => {
    setSize([windowWidth, windowHeight]);
  }, [windowHeight, windowWidth]);
  return size;
};

export default useWindowSizeCsr;
