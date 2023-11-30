import React from "react";
import { StyledDropdown } from "./Dropdown.style";

export type DropdownPosition = "top" | "bottom";

export function Dropdown(props: React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<DropdownPosition>("bottom");

  React.useEffect(() => {
    const { current } = ref;
    if (current === null) return;
    const isOverflowing =
      current.scrollHeight > current.clientHeight ||
      current.scrollWidth > current.clientWidth;

    if (isOverflowing) {
      console.log("The dropdown is overflowing.");
    } else {
      console.log("The dropdown is not overflowing.");
    }
  }, []);

  function getClassName() {
    let className = props.className || "";
    className += ` ${position}`;
    return className;
  }

  return <StyledDropdown ref={ref} {...props} className={getClassName()} />;
}
