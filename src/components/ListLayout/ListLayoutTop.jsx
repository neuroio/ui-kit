import styled from "styled-components";

import { ListStickyHeader } from "../ListStickyHeader";

import { colors } from "../../style";

const ListLayoutTop = styled(ListStickyHeader)`
  padding-bottom: 24px;
  background-color: ${colors.whiteSimple};
`;

export { ListLayoutTop };
