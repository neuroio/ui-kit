import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";
import usePortal from "react-useportal";

import Sticky from "react-stickynode";
import { StyledListStickyHeader } from "./StyledListStickyHeader";
import { ListStickyHeaderFixedBackground } from "./ListStickyHeaderFixedBackground";

function ListStickyHeader({ children, className, offsetTop, innerZ }) {
  const { Portal } = usePortal({
    isOpen: true,
    bindTo: document.getElementById("app-container") || document.body,
  });

  const headerRef = useRef(null);

  return (
    <Sticky innerZ={innerZ} top={offsetTop}>
      {(stickyProps) => {
        return (
          <StyledListStickyHeader className={className} ref={headerRef}>
            {typeof children === "function" ? children(stickyProps) : children}
            {/* Компонент нужен для того, чтобы перекрывать собой все, что по бокам от хедера */}
            {headerRef.current && stickyProps.status === Sticky.STATUS_FIXED && (
              <Portal>
                <ListStickyHeaderFixedBackground
                  headerRef={headerRef.current}
                  style={{
                    // TODO: проверить, что высота реагирует на изменение высоты хедера
                    height: headerRef.current.offsetHeight,
                    top: offsetTop,
                  }}
                />
              </Portal>
            )}
          </StyledListStickyHeader>
        );
      }}
    </Sticky>
  );
}

ListStickyHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
  offsetTop: PropTypes.number.isRequired,
  innerZ: PropTypes.number,
};

ListStickyHeader.defaultProps = {
  appHeaderHeight: 59,
  innerZ: 4,
};

export { ListStickyHeader };
