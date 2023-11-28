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

  &:hover {
    background-color: var(--accent-color);
  }

  &.primary {
    background-color: var(--primary-color);
    color: white;

    &:hover {
      background-color: var(--primary-overlay);
    }
  }

  span {
    font-size: 16px;
    color: var(--text-color);
  }

  p {
    font-size: 14px;
  }
`;
