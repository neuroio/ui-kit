import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuUserDropdown } from "./StyledHeaderTopMenuUserDropdown";
import { HeaderTopMenuUserDropdownItem } from "./HeaderTopMenuUserDropdownItem";

function HeaderTopMenuUserDropdown({ isOpen, children, innerRef, coords }) {
  return (
    <StyledHeaderTopMenuUserDropdown
      isOpen={isOpen}
      ref={innerRef}
      left={coords.left}
      top={coords.top + 20}
      as="ul"
    >
      {children}
    </StyledHeaderTopMenuUserDropdown>
  );
}

HeaderTopMenuUserDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  innerRef: PropTypes.object.isRequired,
  coords: PropTypes.object.isRequired,
};

HeaderTopMenuUserDropdown.Item = HeaderTopMenuUserDropdownItem;

export * from "./HeaderTopMenuUserDropdownItem";

export { HeaderTopMenuUserDropdown };
