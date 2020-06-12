import styled from "styled-components";
import { StyledDeleteSureButton } from "./index";

/**
 * Этот компонент используется для того,
 * чтобы расчитать итоговый размер кнопки
 */
const DeleteSurePseudoButton = styled(StyledDeleteSureButton)`
  position: fixed;
  visibility: hidden;
`;

export { DeleteSurePseudoButton };
