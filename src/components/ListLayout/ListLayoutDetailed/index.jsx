import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutDetailedInner } from "./ListLayoutDetailedInner";

function ListLayoutDetailed({
  children,
  innerZ,
  offsetTop,
  "data-testid": testId,
  className,
}) {
  return (
    <StyledListLayoutDetailed
      innerZ={innerZ}
      top={offsetTop}
      className={className}
    >
      <ListLayoutDetailedInner data-testid={testId} className={className}>
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
  offsetTop: 120,
  innerZ: 4,
};

export { ListLayoutDetailed };
