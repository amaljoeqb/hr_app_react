import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  z-index: 100;
  display: block;

  &.top {
    top: auto;
    bottom: 100%;
  }
`;
