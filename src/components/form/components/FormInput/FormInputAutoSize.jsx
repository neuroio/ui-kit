import styled from "styled-components";

import { StyledFormInput } from "./StyledFormInput";
import ContentEditable from "react-contenteditable";

import { getTestId } from "../../utils";

function addNameToTarget(name, handler) {
  return function (ev) {
    if (typeof handler !== "function") {
      return handler;
    }

    const event = { ...ev };

    event.target.name = name;

    handler(event);
  };
}

const FormInputAutoSize = styled(StyledFormInput).attrs(
  ({ name, value, onChange, onBlur, onFocus, "data-testid": testId }) => ({
    as: ContentEditable,
    html: value,
    onChange: addNameToTarget(name, onChange),
    onBlur: addNameToTarget(name, onBlur),
    onFocus: addNameToTarget(name, onFocus),
    "data-testid": getTestId(name, testId),
  })
)`
  white-space: nowrap;
  cursor: text;
`;

export { FormInputAutoSize };
