import SidebarMenu from "./SidebarMenu";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar({ homeClick, sideClick, toggleClick }) {
  return (
    <div>
      <div className={`sidebar ${sideClick ? "active" : ""}`}>
        <FontAwesomeIcon
          className="sidebar-xmark-icon fa-2xl"
          icon={faXmark}
          onClick={toggleClick}
        />
        <Link to={`/`} style={{ textDecoration: "none" }} onClick={homeClick}>
          Home
        </Link>
        <Link to={"/genres"} style={{ textDecoration: "none" }}>
          <SidebarMenu menuTitle={"genres"} />
        </Link>
        <Link to={"/platforms"} style={{ textDecoration: "none" }}>
          <SidebarMenu menuTitle={"platforms"} />
        </Link>
        <Link to={"/stores"} style={{ textDecoration: "none" }}>
          <SidebarMenu menuTitle={"stores"} />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
