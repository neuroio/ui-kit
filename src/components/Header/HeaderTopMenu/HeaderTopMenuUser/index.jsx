import React from "react";
import PropTypes from "prop-types";

import { useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { usePositionPopup } from "../../../../hooks/use-position-popup";

import { StyledHeaderTopMenuUser } from "./StyledHeaderTopMenuUser";
import { HeaderTopMenuUserUsername } from "./HeaderTopMenuUserUsername";
import { HeaderTopMenuUserUsernameLogout } from "./HeaderTopMenuUserUsernameLogout";
import { HeaderTopMenuUserDropdown } from "./HeaderTopMenuUserDropdown";
import { ArrowAltCircleRight } from "../../../icons";

function HeaderTopMenuUser({ username, onLogout, dropdown }) {
  const popupTrigger = useRef(null);
  const { y } = useWindowScroll();

  const {
    Portal,
    bind,
    coords,
    popupInner,
    togglePortal,
    closePortal,
    isOpen,
  } = usePositionPopup({
    pupupTrigger: popupTrigger,
    position: "bottomRight",
  });

  useEffect(() => {
    closePortal();
  }, [y]);

  return (
    <StyledHeaderTopMenuUser {...bind} ref={popupTrigger}>
      <HeaderTopMenuUserUsername
        username={username}
        onClick={dropdown && togglePortal}
      />
      <HeaderTopMenuUserUsernameLogout onClick={onLogout}>
        <ArrowAltCircleRight size="15" />
      </HeaderTopMenuUserUsernameLogout>
      {dropdown && (
        <Portal>
          <HeaderTopMenuUserDropdown
            innerRef={popupInner}
            isOpen={isOpen}
            coords={coords}
          >
            {dropdown}
          </HeaderTopMenuUserDropdown>
        </Portal>
      )}
    </StyledHeaderTopMenuUser>
  );
}

HeaderTopMenuUser.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  dropdown: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

HeaderTopMenuUser.defaultProps = {
  dropdown: null,
};

export * from "./HeaderTopMenuUserDropdown";

export { HeaderTopMenuUser };
