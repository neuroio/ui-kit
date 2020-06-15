import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutContext } from "../index";

function ListLayoutDetailed({ children, "data-testid": testId, className }) {
  const { headerRect } = React.useContext(ListLayoutContext);

  return (
    <StyledListLayoutDetailed
      data-testid={testId}
      className={className}
      style={
        headerRect && {
          top: headerRect.top + headerRect.height,
          zIndex: 5,
        }
      }
    >
      {children}
    </StyledListLayoutDetailed>
  );
}

ListLayoutDetailed.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { ListLayoutDetailed };
