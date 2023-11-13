export interface HighlightedSpanProps {
  text: string | number;
  searchTerm: string;
}

export default function HighlightedSpan({
  text,
  searchTerm,
}: {
  text: string | number;
  searchTerm: string;
}) {
  if (typeof text !== "string" && typeof text !== "number") {
    return <span>{text}</span>;
  }
  const textString = text.toString();
  const lowerCaseText = textString.toString().toLowerCase();
  if (!searchTerm || !lowerCaseText.includes(searchTerm)) {
    return <span>{text}</span>;
  }
  const startIndex = lowerCaseText.toString().indexOf(searchTerm);
  const endIndex = startIndex + searchTerm.length;
  return (
    <span>
      {textString.toString().slice(0, startIndex)}
      <span className="highlight">
        {textString.slice(startIndex, endIndex)}
      </span>
      {textString.slice(endIndex)}
    </span>
  );
}
