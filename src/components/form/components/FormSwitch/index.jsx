import React from "react";
import PropTypes from "prop-types";

import { StyledFormSwitch } from "./StyledFormSwitch";
import { FormSwitchLabel } from "./FormSwitchLabel";
import { FormSwitchCheckbox } from "./FormSwitchCheckbox";

import { getTestId } from "../../utils";

function FormSwitch({
  name,
  size,
  checked,
  onChange,
  disabled,
  className,
  "data-testid": testId,
}) {
  testId = getTestId(name, testId);

  return (
    <StyledFormSwitch
      htmlFor={name ? name : undefined}
      size={size}
      className={className}
      data-testid={testId}
      disabled={disabled}
    >
      <FormSwitchCheckbox
        id={name}
        name={name}
        value={checked}
        checked={checked}
        onChange={onChange}
        size={size}
        data-testid={testId + "-checkbox"}
        disabled={disabled}
      />
      <FormSwitchLabel
        size={size}
        checked={checked}
        data-testid={testId + "-label"}
      />
    </StyledFormSwitch>
  );
}

FormSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["m"]),
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  disabled: PropTypes.bool,
};

FormSwitch.defaultProps = {
  size: "m",
};

export { FormSwitch, StyledFormSwitch, FormSwitchLabel };
