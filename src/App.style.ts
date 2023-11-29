import styled from "styled-components";
import { StyledFooter } from "./layout/Footer/Footer.style";

export const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${StyledFooter} {
    margin-top: auto;
  }
`;
