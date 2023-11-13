import React from "react";
import { StyledChip } from "./Chip.style";

export default function Chip({ children }: React.PropsWithChildren) {
  return <StyledChip>{children}</StyledChip>;
}
