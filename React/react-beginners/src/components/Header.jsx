import Search from "./Search";
import { Link } from "react-router-dom";

function Header({ count, inputValue, click }) {
  return (
    <header>
      <Link to={`/`} style={{textDecoration: 'none'}} onClick={click}>
        <h1>My Projects</h1>
      </Link>
      <Search count={count} inputValue={inputValue} />
      <a className="login" href="../index.js">
        Login
      </a>
    </header>
  );
}

export default Header;
