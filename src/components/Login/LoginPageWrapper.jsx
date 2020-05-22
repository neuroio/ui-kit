import styled from "styled-components";

import RouteSection from "../RouteSection/StyledRouteSection";
import { StyledFooter } from "../Footer";

const LoginPageWrapper = styled(RouteSection)`
  min-height: 640px;
  width: 730px;
  margin: 0 auto;
  justify-content: center;

  ${StyledFooter} {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
  }
`;

export { LoginPageWrapper };
