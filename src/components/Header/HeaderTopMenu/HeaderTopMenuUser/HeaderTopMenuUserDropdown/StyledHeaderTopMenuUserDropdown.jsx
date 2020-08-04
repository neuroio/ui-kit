import styled from "styled-components";

import { PopupContainer } from "../../../../PopupContainer";
import { HeaderTopMenuUserDropdownItem } from "./HeaderTopMenuUserDropdownItem";
import { colors } from "../../../../../style";

const StyledHeaderTopMenuUserDropdown = styled(PopupContainer)`
  margin: 0;
  background-color: ${colors.whiteSimple};
  width: 280px;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  border-radius: 4px;
  padding: 32px 32px;
  box-sizing: border-box;
  z-index: 11;

  ${HeaderTopMenuUserDropdownItem}:not(:last-child) {
    margin-bottom: 24px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -8px;
    right: 10px;
    border-width: 0 10px 8px 10px;
    border-style: solid;
    border-color: transparent transparent ${colors.whiteSimple} transparent;
  }
`;

export { StyledHeaderTopMenuUserDropdown };
