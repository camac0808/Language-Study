import Search from "./Search";
import { Link } from "react-router-dom";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import { useState } from 'react';

function Header({ count, inputValue, homeClick }) {
  const [value, setValue] = useState(false);
  
  function toggle() {
    setValue(prev => !prev);
  }
  
  return (
    <header>
      <FontAwesomeIcon
        className="header-hamburger-icon fa-xl"
        icon={faBars}
        onClick={toggle}
      />
      <Sidebar homeClick={homeClick} sideClick={value ? 1 : 0} toggleClick={toggle}/>
      <Link to={`/`} style={{ textDecoration: "none" }} onClick={homeClick}>
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
