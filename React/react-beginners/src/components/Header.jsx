import Search from "./Search";
import { Link } from "react-router-dom";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

function Header({ count, inputValue, homeClick, headerHomeClick, categoryClick, toggleClick, sideState }) {
  return (
    <header>
      <FontAwesomeIcon
        className="header-hamburger-icon fa-xl"
        icon={faBars}
        onClick={toggleClick}
      />
      <Sidebar
        homeClick={homeClick}
        sideState={sideState ? 1 : 0}
        toggleClick={toggleClick}
        categoryClick={categoryClick}
      />
      <Link to={`/`} style={{ textDecoration: "none" }} onClick={headerHomeClick}>
        <FontAwesomeIcon className="header-home-icon fa-xl" icon={faHouse} />
      </Link>
      <Search count={count} inputValue={inputValue} />
      <Link to={`/signup`} className="login">
        Login
      </Link>
    </header>
  );
}

export default Header;
