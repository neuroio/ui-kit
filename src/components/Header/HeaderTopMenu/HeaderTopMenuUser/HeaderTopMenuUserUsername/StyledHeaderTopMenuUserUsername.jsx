import styled from "styled-components";

import { TextBold } from "../../../../Text/TextBold";
import { TextTrim, colors } from "../../../../../style";

const StyledHeaderTopMenuUserUsername = styled(TextBold)`
  ${TextTrim}
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
  min-width: 120px;
  max-width: 320px;
  color: ${colors.darkBlack};
  line-height: 1.5;
  font-size: 13px;
  text-align: center;
`;

export { StyledHeaderTopMenuUserUsername };
