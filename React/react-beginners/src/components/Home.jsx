import { useEffect, useState } from "react";
import Game from "./Game";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Pagination";
import Header from "./Header";

function Home() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [detailedCategory, setDetailedCategory] = useState("");
  const [platformCategory, setPlatformCategory] = useState("");
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [slug, setSlug] = useState("");
  const [sideState, setSideState] = useState(false);

  const API_KEY = "e715e4b774ae45a4a9dd7302c6fdc0ca";

  function pageMove(page) {
    setCurrentPage(page);
  }

  function inputValue(value) {
    setSlug(value);
  }

  function homeClick(event) {
    event.preventDefault();
    setSlug("");
    setCategory("");
    setDetailedCategory("");
    toggle();
    setCurrentPage(1);
  }

  function headerHomeClick(event) {
    event.preventDefault();
    setSlug("");
    setCategory("");
    setDetailedCategory("");
    setPlatformCategory("");
    setCurrentPage(1);
  }

  // platform은 query value값을 숫자로 받아서 따로 id 지정해줬다
  function categoryClick(e, param) {
    e.preventDefault();
    setCategory(param.category === "platforms" ? "parent_platforms" : param.category);
    setDetailedCategory(param.detailedCategory);
    setPlatformCategory(param.id);
    setCurrentPage(1);
    toggle();
    console.log(category, detailedCategory, platformCategory);
  }

  useEffect(() => {
    async function getGames() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?${category}=${
            category === "genres" ? detailedCategory : platformCategory
          }&page=${currentPage}&search=${slug}&page_size=20&key=${API_KEY}`
        );
        console.log(response);
        const data = await response.json();
        setGames(data.results);
        setCount(data.count);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    console.log(currentPage);
    getGames();
  }, [currentPage, slug, category, detailedCategory, platformCategory]);

  function toggle() {
    setSideState((prev) => !prev);
  }

  return (
    <div>
      <Header
        count={count}
        inputValue={inputValue}
        homeClick={homeClick}
        headerHomeClick={headerHomeClick}
        categoryClick={categoryClick}
        toggleClick={toggle}
        sideState={sideState}
      />
      <div className="home container">
        {loading ? (
          <div className="loading">
            <h1>Loading...</h1>
            <div className="fa-3x">
              <FontAwesomeIcon icon={faSpinner} spin style={{ color: "white" }} />
            </div>
          </div>
        ) : (
          <h2 className="main-title" data-aos="fade-up">
            {slug
              ? `${slug.toUpperCase()} results...`
              : detailedCategory.toUpperCase()
              ? `${detailedCategory.toUpperCase()} results...`
              : "All Games"}
          </h2>
        )}
        <main>
          <div className="game-container">
            {games.map((game) => {
              return (
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  image={game.background_image}
                  genres={game.genres}
                  platforms={game.parent_platforms}
                  metacriticScore={game.metacritic}
                  released={game.released}
                />
              );
            })}
          </div>
        </main>
        {loading ? null : (
          <Pagination pageClick={pageMove} count={count} currentPage={currentPage} />
        )}
      </div>
    </div>
  );
}

export default Home;
