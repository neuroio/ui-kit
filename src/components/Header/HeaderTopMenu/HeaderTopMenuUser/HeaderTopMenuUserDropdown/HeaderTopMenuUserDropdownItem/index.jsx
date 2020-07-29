import styled from "styled-components";

import { HeaderTopMenuUserDropdownItemAction } from "./HeaderTopMenuUserDropdownItemAction";
import { HeaderTopMenuUserDropdownItemIcon } from "./HeaderTopMenuUserDropdownItemIcon";
import { HeaderTopMenuUserDropdownItemText } from "./HeaderTopMenuUserDropdownItemText";
import { HeaderTopMenuUserDropdownItemMenu } from "./HeaderTopMenuUserDropdownItemMenu";

const HeaderTopMenuUserDropdownItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  line-height: 26px;
`;

HeaderTopMenuUserDropdownItem.Action = HeaderTopMenuUserDropdownItemAction;
HeaderTopMenuUserDropdownItem.Icon = HeaderTopMenuUserDropdownItemIcon;
HeaderTopMenuUserDropdownItem.Text = HeaderTopMenuUserDropdownItemText;
HeaderTopMenuUserDropdownItem.Menu = HeaderTopMenuUserDropdownItemMenu;

export { HeaderTopMenuUserDropdownItem };
