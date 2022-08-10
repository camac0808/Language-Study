import SidebarMenu from "./SidebarMenu";
import { Link } from "react-router-dom";

function Sidebar({ homeClick }) {
  return (
    <div className="sidebar">
      <Link to={`/`} style={{ textDecoration: "none" }} onClick={homeClick}>
        Home
      </Link>
      <SidebarMenu menuTitle={"genres"}/>;
      <SidebarMenu menuTitle={"platforms"}/>;
      <SidebarMenu menuTitle={"stores"}/>;
    </div>
  );
}

export default Sidebar;
