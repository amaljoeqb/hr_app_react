import styled from "styled-components";
import { DropdownProps } from "./Dropdown";

export const StyledDropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  z-index: 100;
  overflow: hidden;
  display: none;

  ${({ isOpen }) =>
    isOpen &&
    `
        display: block;
    `}
`;
