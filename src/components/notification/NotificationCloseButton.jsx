import styled from "styled-components";

import { Button } from "../Button";

const NotificationCloseButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 8px;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
`;

export default NotificationCloseButton;
