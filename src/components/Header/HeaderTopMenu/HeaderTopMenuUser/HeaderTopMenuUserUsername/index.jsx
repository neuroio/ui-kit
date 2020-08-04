import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuUserUsername } from "./StyledHeaderTopMenuUserUsername";
import { Button } from "../../../../Button";

function HeaderTopMenuUserUsername({ username, onClick }) {
  return (
    <StyledHeaderTopMenuUserUsername onClick={onClick} as={onClick && Button}>
      {username}
    </StyledHeaderTopMenuUserUsername>
  );
}

HeaderTopMenuUserUsername.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { HeaderTopMenuUserUsername };
