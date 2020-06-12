import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";
import { useClientRect } from "../../../hooks";

import Sticky from "react-stickynode";
import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutDetailedInner } from "./ListLayoutDetailedInner";

function ListLayoutDetailed({
  children,
  innerZ,
  offsetTop,
  "data-testid": testId,
  className,
  updateDeps,
}) {
  const [rect, headerRef] = useClientRect(updateDeps);
  const [status, setStatus] = useState(null);
  /**
   * 35 - высота верхней проскраливаемой области
   * TODO: вместо этого можно использовать header.offsetTop
   */
  const top = offsetTop || (rect ? rect.y - 35 : 0);
  const zIndex = innerZ || (status === Sticky.STATUS_RELEASED ? 3 : 4);

  return (
    <StyledListLayoutDetailed
      innerZ={zIndex}
      top={top}
      bottomBoundary="#list-layout-content"
      className={className}
    >
      {({ status }) => {
        setStatus(status);
        return (
          <ListLayoutDetailedInner
            data-testid={testId}
            className={className}
            ref={headerRef}
          >
            {children}
          </ListLayoutDetailedInner>
        );
      }}
    </StyledListLayoutDetailed>
  );
}

ListLayoutDetailed.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  innerZ: PropTypes.number,
  offsetTop: PropTypes.number.isRequired,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  updateDeps: PropTypes.array,
};

export { ListLayoutDetailed };
