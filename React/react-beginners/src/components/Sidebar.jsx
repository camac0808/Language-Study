// import SidebarMenu from "./SidebarMenu";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenu from './SidebarMenu';

function Sidebar({ homeClick, sideState, toggleClick, categoryClick }) {
  
  
  return (
    <div>
      <div className={`sidebar ${sideState ? "active" : ""}`}>
        <FontAwesomeIcon
          className="sidebar-xmark-icon fa-2xl"
          icon={faXmark}
          onClick={toggleClick}
        />
        <Link to={`/React-project`} style={{ textDecoration: "none" }} onClick={homeClick} className="homeButton">
          Home
        </Link>
        <Link to={"/React-project"} style={{ textDecoration: "none" }} >
          <SidebarMenu title='genres' categoryClick={categoryClick}/>
        </Link>
        <Link to={"/React-project"} style={{ textDecoration: "none" }}>
          <SidebarMenu title='platforms' categoryClick={categoryClick} />
        </Link>
        <Link to={"/React-project"} style={{ textDecoration: "none" }}>
          <SidebarMenu title='stores' categoryClick={categoryClick}/>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
