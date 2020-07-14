import styled from "styled-components";

import { FormDropdownMenu } from "../../FormDropdown/FormDropdownMenu";
import { FormDropdownInputWrapper } from "../../FormDropdown/FormDropdownInputWrapper";

const FormFromToPickerTabsInner = styled.div`
  height: 275px;

  ${FormDropdownMenu} {
    max-height: 275px;
  }

  ${FormDropdownInputWrapper} {
    padding-top: 0;
  }
`;

export { FormFromToPickerTabsInner };
