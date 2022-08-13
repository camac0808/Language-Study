import { useEffect, useState } from "react";

function SidebarMenu({ menuTitle }) {
  const API_KEY = "ea46da76162f45f8a179463a877ff12e";
  const [names, setNames] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/${menuTitle}?&key=${API_KEY}`);
      const data = await response.json();
      setNames(data.results);
      console.log(names);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sidebar-menu">
      <span>
        {menuTitle}
      </span>
    </div>
  );
}

export default SidebarMenu;
