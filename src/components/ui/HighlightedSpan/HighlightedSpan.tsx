import { StyledHighlightSpan } from "./HighlightedSpan.style";

export interface HighlightSpanProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  text: string | number;
  searchTerm: string;
  modified?: boolean;
}

export default function HighlightSpan({
  text,
  searchTerm,
  modified,
  ...props
}: HighlightSpanProps) {
  const textString = text.toString();
  const lowerCaseText = textString.toString().toLowerCase();

  function getHighlightedElement() {
    const startIndex = lowerCaseText.toString().indexOf(searchTerm);
    const endIndex = startIndex + searchTerm.length;

    return (
      <>
        {textString.slice(0, startIndex)}
        <span className="highlight">
          {textString.slice(startIndex, endIndex)}
        </span>
        {textString.slice(endIndex)}
      </>
    );
  }

  return (
    <StyledHighlightSpan {...props}>
      {!searchTerm || !lowerCaseText.includes(searchTerm)
        ? text
        : getHighlightedElement()}
    </StyledHighlightSpan>
  );
}
