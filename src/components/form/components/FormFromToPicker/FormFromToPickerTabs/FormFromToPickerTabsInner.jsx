import styled from "styled-components";

import { FormDropdownMenu } from "../../FormDropdown/FormDropdownMenu";
import { FormDropdownInput } from "../../FormDropdown/FormDropdownInput";

const FormFromToPickerTabsInner = styled.div`
  height: 275px;

  ${FormDropdownMenu} {
    max-height: 275px;
  }

  ${FormDropdownInput} {
    padding-top: 0;
  }
`;

export { FormFromToPickerTabsInner };
