import React from "react";
import PropTypes from "prop-types";

import { useState, useContext, useEffect, useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";
import usePortal from "react-useportal";

import { StyledListStickyHeader } from "./StyledListStickyHeader";
import { ListStickyHeaderFixedBackground } from "./ListStickyHeaderFixedBackground";
import { ListLayoutContext } from "../ListLayout";

function ListStickyHeader({ children, className, innerZ, offsetTop }) {
  const { Portal } = usePortal({
    isOpen: true,
    bindTo: document.getElementById("app-container") || document.body,
  });

  const ref = React.useRef(null);
  const [rect, setRect] = useState(null);

  const { setHeaderRect } = useContext(ListLayoutContext);

  useEffect(() => {
    setHeaderRect(rect);
  }, [rect, setHeaderRect]);

  // обновляем координаты по скроллу
  useWindowScroll();
  useLayoutEffect(() => {
    if (ref.current) {
      const newRect = ref.current.getBoundingClientRect();

      if (JSON.stringify(newRect) !== JSON.stringify(rect)) {
        setRect(ref.current.getBoundingClientRect());
      }
    }
  });

  return (
    <StyledListStickyHeader
      className={className}
      ref={ref}
      style={rect && { top: offsetTop, zIndex: innerZ }}
    >
      {typeof children === "function" ? children({}) : children}
      {/* Компонент нужен для того, чтобы перекрывать собой все, что по бокам от хедера */}
      {rect && (
        <Portal>
          <ListStickyHeaderFixedBackground
            style={{
              height: rect.height,
              top: rect.top,
              zIndex: innerZ - 1,
            }}
          />
        </Portal>
      )}
    </StyledListStickyHeader>
  );
}

ListStickyHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
  innerZ: PropTypes.number,
  offsetTop: PropTypes.number,
};

ListStickyHeader.defaultProps = {
  innerZ: 4,
  offsetTop: 59,
};

export { ListStickyHeader };
