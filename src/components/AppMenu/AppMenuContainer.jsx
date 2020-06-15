import styled from "styled-components";

import { colors } from "../../style";

const AppMenuContainer = styled.div`
  background-color: ${colors.whiteSimple};
  padding-top: 20px;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export { AppMenuContainer };
