import { useEffect, useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarMenu({ title, categoryClick }) {
  const API_KEY = "e715e4b774ae45a4a9dd7302c6fdc0ca";
  const [categorys, setCategorys] = useState([]);
  const [showSideCategory, setShowSideCategory] = useState(false);


  const getMenu = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/${title}?&key=${API_KEY}`);
      const data = await response.json();
      setCategorys(data.results);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  function dataCategory(e, param) {
    categoryClick(e, param);
    setShowSideCategory(false);
    console.log(param)
  }

  function toggleSideCategory() {
    setShowSideCategory((prev) => !prev);
  }

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sidebar-menu">
      <div className="d-flex align-items-center sidebar-menu-title" onClick={toggleSideCategory}>
        <div>{title}</div>
        <FontAwesomeIcon
          className={showSideCategory ? "sidebar-down-icon fa-lg rotate" : "sidebar-down-icon fa-lg"}
          icon={faAngleRight}
          style={{ marginLeft: "20px" }}
        />
      </div>
      {showSideCategory ? (
        <ul className={title}>
          {categorys.map((category) => {
            return (
              <li
                className="sidebar-category"
                key={category.id}
                onClick={(e) => {
                  const categoryClass = e.target.parentElement.className;
                  dataCategory(e, {
                    category : categoryClass,
                    slug : category.slug,
                  })
                }}
              >
                {category.slug}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default SidebarMenu;
