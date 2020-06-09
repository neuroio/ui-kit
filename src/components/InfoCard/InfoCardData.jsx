import styled from "styled-components";

import { StyledInfoCardField } from "./InfoCardField";
import { StyledInfoCardPhoto } from "./InfoCardPhoto";

const InfoCardData = styled.div`
  ${StyledInfoCardPhoto}:not(:last-child) {
    margin-right: 24px;
  }

  ${StyledInfoCardField}:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export { InfoCardData };
