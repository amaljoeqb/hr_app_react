import styled from "styled-components";

export const StyledHighlightSpan = styled.span`
  &.modified {
    animation: modified-anim 1s ease-in-out;

    @keyframes modified-anim {
      0% {
        color: var(--text-color);
      }
      50% {
        color: var(--modified-color);
      }
      100% {
        color: var(--text-color);
      }
    }
  }

  &.added {
    animation: added-anim 1s ease-in-out;

    @keyframes added-anim {
      0% {
        color: var(--text-color);
      }
      50% {
        color: var(--added-color);
      }
      100% {
        color: var(--text-color);
      }
    }
  }

  .highlight {
    background-color: var(--highlight-color);
  }
`;
