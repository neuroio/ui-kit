import styled from "styled-components";

import { PopupContainer } from "../../../../PopupContainer";
import { HeaderTopMenuUserDropdownItem } from "./HeaderTopMenuUserDropdownItem";
import { colors } from "../../../../../style";

const StyledHeaderTopMenuUserDropdown = styled(PopupContainer)`
  margin: 0;
  background-color: ${colors.whiteSimple};
  width: 280px;
  /* min-height: 148px; */
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 4px;
  padding: 32px 32px;
  box-sizing: border-box;
  z-index: 11;

  ${HeaderTopMenuUserDropdownItem}:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export { StyledHeaderTopMenuUserDropdown };
