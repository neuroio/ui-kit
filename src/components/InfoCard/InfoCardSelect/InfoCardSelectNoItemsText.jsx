import styled from "styled-components";

import { textTrimStyles } from "../../Text/TextTrim";
import { colors } from "../../../style";

const InfoCardSelectNoItemsText = styled.li`
  padding: 4px 0px;
  font-size: 12px;
  line-height: 11px;
  color: ${colors.darkBlack};
  box-sizing: border-box;
  border-radius: 2px;
  height: 20px;
  max-width: 180px;
  ${textTrimStyles}
`;

export { InfoCardSelectNoItemsText };
