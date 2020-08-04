import styled from "styled-components";

import { Button } from "../../../../Button";
import { colors } from "../../../../../style";

const HeaderTopMenuUserUsernameLogout = styled(Button)`
  font-size: 15px;
  line-height: 15px;
  color: ${colors.darkBlack};
  background-color: ${colors.grayLight};
  padding-left: 11px;
  padding-right: 11px;
  height: 100%;
`;

export { HeaderTopMenuUserUsernameLogout };
