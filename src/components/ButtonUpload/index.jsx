import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useRef } from "react";

import { Button } from "../Button";

const StyledButtonUpload = styled(Button)``;

function ButtonUpload({
  onUpload,
  children,
  theme,
  className,
  "data-testid": testId,
}) {
  const inputRef = useRef(null);

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        onChange={onUpload}
        hidden
        data-testid={testId}
      />
      <StyledButtonUpload
        theme={theme}
        onClick={(ev) => {
          inputRef.current.click(ev);
        }}
        className={className}
      >
        {children}
      </StyledButtonUpload>
    </>
  );
}

ButtonUpload.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onUpload: PropTypes.func.isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

ButtonUpload.defaultProps = {
  theme: "light",
  "data-testid": "button-upload",
};

export { ButtonUpload, StyledButtonUpload };
