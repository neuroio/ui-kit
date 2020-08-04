import styled from "styled-components";

import { FormDropdownMenu } from "../../../../../form/components/FormDropdown/FormDropdownMenu";

const HeaderTopMenuUserDropdownItemMenu = styled.div`
  flex: 100%;
  padding-top: 16px;

  ${FormDropdownMenu} {
    padding-top: 0;
  }
`;

export { HeaderTopMenuUserDropdownItemMenu };
