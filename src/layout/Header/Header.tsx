import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_black.svg";

export function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <h1>
          <span className="bold">The Q</span> Company
        </h1>
      </Link>
    </header>
  );
}
