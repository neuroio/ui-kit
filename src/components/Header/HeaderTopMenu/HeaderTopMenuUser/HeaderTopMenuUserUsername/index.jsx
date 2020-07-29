import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuUserUsername } from "./StyledHeaderTopMenuUserUsername";
import { HeaderTopMenuUserUsernameIcon } from "./HeaderTopMenuUserUsernameIcon";
import { User } from "../../../../icons";
import { Button } from "../../../../Button";

function HeaderTopMenuUserUsername({ username, onClick }) {
  return (
    <StyledHeaderTopMenuUserUsername onClick={onClick} as={onClick && Button}>
      <HeaderTopMenuUserUsernameIcon>
        <User size="13" />
      </HeaderTopMenuUserUsernameIcon>
      {username}
    </StyledHeaderTopMenuUserUsername>
  );
}

HeaderTopMenuUserUsername.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { HeaderTopMenuUserUsername };
