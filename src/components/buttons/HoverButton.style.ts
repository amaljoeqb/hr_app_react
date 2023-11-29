import styled from "styled-components";

export const StyledHoverButton = styled.button`
  background-color: white;
  border: none;
  outline: 1px solid var(--border-color);
  box-shadow: var(--light-shadow);
  padding: 6px 12px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  column-gap: 6px;
  color: var(--text-color);
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &.dotted {
    border: 1px dashed var(--border-color);
    outline: none;
  }

  &.regular {
    font-weight: 400;
  }

  &:hover {
    background-color: var(--accent-color);
  }

  span {
    font-size: 16px;
    color: var(--text-color);
  }

  p {
    font-size: 14px;
  }

  &:disabled {
    background-color: transparent;
    cursor: default;
    color: var(--dark-grey);

    span {
      color: var(--dark-grey);
    }
  }
`;
