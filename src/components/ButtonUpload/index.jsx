import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";

import { Button } from "../Button";

function ButtonUpload({ onUpload, children, theme }) {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} type="file" onChange={onUpload} hidden />
      <Button
        theme={theme}
        onClick={(ev) => {
          inputRef.current.click(ev);
        }}
      >
        {children}
      </Button>
    </>
  );
}

ButtonUpload.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  onUpload: PropTypes.func.isRequired,
};

ButtonUpload.defaultProps = {
  theme: "light",
};

export { ButtonUpload };
