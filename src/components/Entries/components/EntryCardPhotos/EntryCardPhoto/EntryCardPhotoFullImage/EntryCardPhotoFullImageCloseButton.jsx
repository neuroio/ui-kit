import styled from "styled-components";

import { Button } from "../../../../../Button";

import { colors } from "../../../../../../style";

const EntryCardPhotoFullImageCloseButton = styled(Button)`
  position: absolute;
  top: 40px;
  right: 200px;
  height: 30px;
  width: 30px;
  line-height: 0;
  background-color: ${colors.grayLight};
`;

export { EntryCardPhotoFullImageCloseButton };