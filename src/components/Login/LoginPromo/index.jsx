import React from "react";
import PropTypes from "prop-types";

import { StyledLoginPromo } from "./StyledLoginPromo";
import { LoginPromoLogo } from "./LoginPromoLogo";
import { LoginPromoTitle } from "./LoginPromoTitle";

export function LoginPromo({ logoSrc, title }) {
  return (
    <StyledLoginPromo>
      {logoSrc && <LoginPromoLogo src={logoSrc} />}
      {title && <LoginPromoTitle>{title}</LoginPromoTitle>}
    </StyledLoginPromo>
  );
}

LoginPromo.propTypes = {
  logoSrc: PropTypes.string,
  title: PropTypes.string,
};
