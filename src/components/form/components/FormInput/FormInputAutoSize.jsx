import styled from "styled-components";
import { StyledFormInput } from "./StyledFormInput";

import ContentEditable from "react-contenteditable";

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
  ({ name, value, onChange, onBlur, onFocus }) => ({
    as: ContentEditable,
    html: value,
    onChange: addNameToTarget(name, onChange),
    onBlur: addNameToTarget(name, onBlur),
    onFocus: addNameToTarget(name, onFocus),
  })
)`
  white-space: nowrap;
  cursor: text;
`;

export { FormInputAutoSize };
