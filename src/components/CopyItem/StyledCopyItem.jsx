import styled from "styled-components";

import { Flash } from "../Flash";
import { Clickable } from "../../style";

const StyledCopyItem = styled(Flash)`
  ${Clickable}
  font-size: 16px;
  line-height: 26px;
  color: inherit;
  display: flex;
`;

export { StyledCopyItem };
