import styled, { css } from "styled-components";

const StyledFormFromToPicker = styled.div`
  position: relative;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
`;

export { StyledFormFromToPicker };
