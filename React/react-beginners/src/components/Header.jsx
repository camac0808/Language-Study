import Search from "./Search";
import { Link } from "react-router-dom";

function Header({ count, inputValue, homeClick }) {
  return (
    <header>
      <Link to={`/`} style={{textDecoration: 'none'}} onClick={homeClick}>
        <h1>Home</h1>
      </Link>
      <Search count={count} inputValue={inputValue} />
      <Link to={`/signup`} className="login" >
        Login
      </Link>
    </header>
  );
}

export default Header;
