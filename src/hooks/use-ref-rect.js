import { useEffect, useState, useLayoutEffect } from "react";

function useRefRect(ref, onChange) {
  const [rect, setRect] = useState(null);
  useEffect(() => {
    if (onChange) {
      onChange(rect);
    }
  }, [rect, onChange]);

  useLayoutEffect(() => {
    if (ref.current) {
      const newRect = ref.current.getBoundingClientRect();

      if (JSON.stringify(newRect) !== JSON.stringify(rect)) {
        setRect(ref.current.getBoundingClientRect());
      }
    }
  });

  return rect;
}

export { useRefRect };
