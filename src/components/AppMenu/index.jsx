import React from "react";
import PropTypes from "prop-types";

import { useState } from "react";

import Sticky from "react-stickynode";
import { StyledAppMenu } from "./StyledAppMenu";
import { AppMenuLink } from "./AppMenuLink";
import { AppMenuContainer } from "./AppMenuContainer";

function Link(props) {
  const { id, title, to } = props;

  return (
    <AppMenu.Link to={to} key={id} content={title}>
      {title}
    </AppMenu.Link>
  );
}

Link.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function AppMenu({ links, children, className }) {
  const [stickyState, setStickyState] = useState({});

  return (
    <Sticky
      innerZ={stickyState.status === Sticky.STATUS_FIXED ? 3 : 1}
      onStateChange={setStickyState}
    >
      <AppMenuContainer>
        <StyledAppMenu className={className}>
          {Array.isArray(links) && links.length ? links.map(Link) : children}
        </StyledAppMenu>
      </AppMenuContainer>
    </Sticky>
  );
}

AppMenu.propTypes = {
  links: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  className: PropTypes.string,
};

AppMenu.Link = AppMenuLink;

export { AppMenu, AppMenuLink };
