import styled from "styled-components";

import { colors } from "../../style";

const ListStickyHeaderFixedBackground = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${colors.whiteSimple};
  left: 0;
`;

export { ListStickyHeaderFixedBackground };
