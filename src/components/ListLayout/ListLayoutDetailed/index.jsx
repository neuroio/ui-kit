import React from "react";
import PropTypes from "prop-types";

import { useClientRect } from "../../../hooks";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutDetailedInner } from "./ListLayoutDetailedInner";

function ListLayoutDetailed({
  children,
  innerZ,
  offsetTop,
  "data-testid": testId,
  className,
}) {
  const [rect, headerRef] = useClientRect();
  /**
   * 35 - высота верхней проскраливаемой области
   * TODO: вместо этого можно использовать header.offsetTop
   */
  const top = offsetTop || (rect ? rect.y - 35 : 0);

  return (
    <StyledListLayoutDetailed innerZ={innerZ} top={top} className={className}>
      <ListLayoutDetailedInner
        data-testid={testId}
        className={className}
        ref={headerRef}
      >
        {children}
      </ListLayoutDetailedInner>
    </StyledListLayoutDetailed>
  );
}

ListLayoutDetailed.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  innerZ: PropTypes.number,
  offsetTop: PropTypes.number.isRequired,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

ListLayoutDetailed.defaultProps = {
  innerZ: 4,
};

export { ListLayoutDetailed };
