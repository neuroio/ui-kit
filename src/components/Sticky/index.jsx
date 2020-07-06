import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect, useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";
import usePortal from "react-useportal";

import { StickyFixedBackground } from "./StickyFixedBackground";

function Sticky({
  offsetTop,
  innerZ,
  children,
  hasBackground,
  onRectChange,
  className,
}) {
  const { Portal } = usePortal();

  const ref = React.useRef(null);
  const [rect, setRect] = useState(null);

  const { y } = useWindowScroll();
  const [isSticky, setIsSticky] = useState(
    rect ? y !== 0 && y >= rect.top : false
  );

  useEffect(() => {
    setIsSticky(rect ? y !== 0 && y >= rect.top : false);
  }, [y, rect]);

  useEffect(() => {
    if (onRectChange) {
      onRectChange(rect);
    }
  }, [rect, onRectChange]);

  useLayoutEffect(() => {
    if (ref.current) {
      const newRect = ref.current.getBoundingClientRect();

      if (JSON.stringify(newRect) !== JSON.stringify(rect)) {
        setRect(ref.current.getBoundingClientRect());
      }
    }
  });

  const stickyBag = {
    ref,
    rect,
    style: { position: "sticky", top: offsetTop, zIndex: innerZ },
    isSticky,
    className,
  };

  return (
    <>
      {typeof children === "function"
        ? children(stickyBag)
        : React.cloneElement(children, {
            ref: stickyBag.ref,
            style: stickyBag.style,
            className: stickyBag.className,
          })}
      {/*
        Компонент нужен для того, чтобы перекрывать собой все, что по бокам от хедера
        на 1px сдвигается для того, чтобы не было бага в chrome на windows
        https://bugs.chromium.org/p/chromium/issues/detail?id=693412
      */}
      {hasBackground && isSticky && rect && (
        <Portal>
          <StickyFixedBackground
            style={{
              height: rect.height + 2,
              top: rect.top - 1,
              zIndex: innerZ - 1,
              backgroundColor: window.getComputedStyle(ref.current)
                .backgroundColor,
            }}
          />
        </Portal>
      )}
    </>
  );
}

Sticky.propTypes = {
  offsetTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  innerZ: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  hasBackground: PropTypes.bool.isRequired,
  onRectChange: PropTypes.func,
  className: PropTypes.string,
};

export { Sticky };
