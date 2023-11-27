import { useRouteError } from "react-router-dom";
import { StyledErrorScreen } from "./ErrorScreen.style";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <StyledErrorScreen>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </StyledErrorScreen>
  );
}
