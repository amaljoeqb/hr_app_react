import { createRef, useEffect } from "react";
import { StyledHighlightSpan } from "./HighlightSpan.style";

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
  const ref = createRef<HTMLSpanElement>();
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

  useEffect(() => {
    const { current } = ref;
    const onAnimationEnd = () => {
      current?.classList.remove("modified");
    };
    if (modified) {
      console.log("modified", text);
      current?.classList.add("modified");
      current?.addEventListener("animationend", onAnimationEnd);
    }
    return () => {
      current?.removeEventListener("animationend", onAnimationEnd);
    };
  }, [modified, ref, text]);

  return (
    <StyledHighlightSpan ref={ref} {...props}>
      {!searchTerm || !lowerCaseText.includes(searchTerm)
        ? text
        : getHighlightedElement()}
    </StyledHighlightSpan>
  );
}
