import { useEffect, useState } from "react";

const useResize = () => {
  const [screen, setScreen] = useState(
    typeof window !== "undefined"
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: 0, height: 0 }
  );
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setScreen({ width: w, height: h });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screen;
};

export default useResize;
