import React from "react";
import PropTypes from "prop-types";

import { useClientRect } from "../../hooks";
import usePortal from "react-useportal";

import Sticky from "react-stickynode";
import { StyledListStickyHeader } from "./StyledListStickyHeader";
import { ListStickyHeaderFixedBackground } from "./ListStickyHeaderFixedBackground";

function ListStickyHeader({
  children,
  className,
  innerZ,
  offsetTop,
  updateDeps,
}) {
  const { Portal } = usePortal({
    isOpen: true,
    bindTo: document.getElementById("app-container") || document.body,
  });

  const [rect, ref] = useClientRect(updateDeps);

  /**
   * 35 - высота верхней проскраливаемой области
   * TODO: вместо этого можно использовать header.offsetTop
   */
  const top = offsetTop || (rect ? rect.y - 35 : 0);

  return (
    <Sticky innerZ={innerZ} top={top}>
      {(stickyProps) => {
        return (
          <StyledListStickyHeader className={className} ref={ref}>
            {typeof children === "function" ? children(stickyProps) : children}
            {/* Компонент нужен для того, чтобы перекрывать собой все, что по бокам от хедера */}
            {rect && stickyProps.status === Sticky.STATUS_FIXED && (
              <Portal>
                <ListStickyHeaderFixedBackground
                  style={{
                    // TODO: проверить, что высота реагирует на изменение высоты хедера
                    height: rect.height,
                    top,
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
  updateDeps: PropTypes.array.isRequired,
};

ListStickyHeader.defaultProps = {
  innerZ: 4,
};

export { ListStickyHeader };
