import React from "react";
import { StyledDropdown } from "./Dropdown.style";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export function Dropdown(props: DropdownProps) {
  return <StyledDropdown {...props} />;
}
