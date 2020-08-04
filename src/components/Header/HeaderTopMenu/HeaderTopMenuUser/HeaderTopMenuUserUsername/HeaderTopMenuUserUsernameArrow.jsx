import styled from "styled-components";

const HeaderTopMenuUserUsernameArrow = styled.span`
  &:after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 18px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #222;
    margin: auto 0;
  }
`;

export { HeaderTopMenuUserUsernameArrow };
