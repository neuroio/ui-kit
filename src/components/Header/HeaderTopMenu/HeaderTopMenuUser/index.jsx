import React from "react";
import PropTypes from "prop-types";

import { useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { usePositionPopup } from "../../../../hooks/use-position-popup";
import { useLocation } from "react-router-dom";

import { StyledHeaderTopMenuUser } from "./StyledHeaderTopMenuUser";
import {
  HeaderTopMenuUserUsername,
  HeaderTopMenuUserUsernameArrow,
  HeaderTopMenuUserUsernameLogout,
} from "./HeaderTopMenuUserUsername";
import { HeaderTopMenuUserDropdown } from "./HeaderTopMenuUserDropdown";
import { ArrowAltCircleRight } from "../../../icons";

function HeaderTopMenuUser({ username, onLogout, dropdown }) {
  const popupTrigger = useRef(null);
  const { y } = useWindowScroll();
  useEffect(() => {
    closePortal();
  }, [y]);

  const location = useLocation();
  useEffect(() => {
    closePortal();
  }, [location.pathname]);

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
    bindTo: document.querySelector("header"),
  });

  return (
    <StyledHeaderTopMenuUser {...bind} ref={popupTrigger}>
      <HeaderTopMenuUserUsername onClick={dropdown && togglePortal}>
        {username}
        {dropdown && <HeaderTopMenuUserUsernameArrow />}
      </HeaderTopMenuUserUsername>
      <HeaderTopMenuUserUsernameLogout onClick={onLogout}>
        <ArrowAltCircleRight size="16" />
      </HeaderTopMenuUserUsernameLogout>
      {dropdown && (
        <Portal>
          <HeaderTopMenuUserDropdown
            innerRef={popupInner}
            isOpen={isOpen}
            coords={coords}
          >
            {typeof dropdown === "function" ? dropdown({ isOpen }) : dropdown}
          </HeaderTopMenuUserDropdown>
        </Portal>
      )}
    </StyledHeaderTopMenuUser>
  );
}

HeaderTopMenuUser.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  dropdown: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

HeaderTopMenuUser.defaultProps = {
  dropdown: null,
};

export * from "./HeaderTopMenuUserDropdown";

export { HeaderTopMenuUser };
