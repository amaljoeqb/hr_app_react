import { StyledHoverButton } from "./HoverButton.style";

export default function HoverButton({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <StyledHoverButton onClick={onClick}>
      {children}
    </StyledHoverButton>
  );
}