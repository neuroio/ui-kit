import React from "react";
import PropTypes from "prop-types";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutContext } from "../index";
import { Sticky } from "../../Sticky";

function ListLayoutDetailed({ children, "data-testid": testId, className }) {
  const { headerRect } = React.useContext(ListLayoutContext);

  const offsetTop = headerRect ? headerRect.top + headerRect.height : 0;

  return (
    <Sticky offsetTop={offsetTop} className={className}>
      {({ ref, style, rect }) => {
        return (
          <StyledListLayoutDetailed
            data-testid={testId}
            ref={ref}
            style={{ ...style, zIndex: rect && rect.top < offsetTop ? 3 : 4 }}
            className={className}
          >
            {children}
          </StyledListLayoutDetailed>
        );
      }}
    </Sticky>
  );
}

ListLayoutDetailed.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

export { ListLayoutDetailed };
