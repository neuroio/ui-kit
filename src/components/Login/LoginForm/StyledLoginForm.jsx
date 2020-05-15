import styled from "styled-components";

import { StyledFormField, StyledFormInput } from "../../form/components";

const StyledLoginForm = styled.form`
  text-align: center;
  position: relative;
  top: 40px;

  ${StyledFormInput} {
    width: 292px;
    height: 40px;
    text-align: center;
  }

  ${StyledFormField} {
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
`;

export { StyledLoginForm };
