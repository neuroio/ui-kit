import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuUserUsername } from "./StyledHeaderTopMenuUserUsername";
import { Button } from "../../../../Button";

function HeaderTopMenuUserUsername({ onClick, children }) {
  return (
    <StyledHeaderTopMenuUserUsername onClick={onClick} as={onClick && Button}>
      {children}
    </StyledHeaderTopMenuUserUsername>
  );
}

HeaderTopMenuUserUsername.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export * from "./HeaderTopMenuUserUsernameArrow";
export * from "./HeaderTopMenuUserUsernameLogout";

export { HeaderTopMenuUserUsername };
