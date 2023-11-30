import React from "react";
import styled from "styled-components";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export function Dropdown(props: DropdownProps) {
  return <StyledDropdown {...props} />;
}

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
