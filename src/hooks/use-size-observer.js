import { useState, useEffect, useRef } from "react";

function useSizeObserver(ref) {
  const updateInterval = useRef(null);
  const [rect, setRect] = useState(null);

  function updateRect() {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setRect({
        left: rect.left,
        top: rect.top,
      });
    }
  }

  useEffect(() => {
    updateInterval.current = setInterval(updateRect, 50);

    return () => {
      clearInterval(updateInterval.current);
    };
  }, []);

  return [rect];
}

export { useSizeObserver };
