import { useEffect, useState } from "react";
import Game from "./Game";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Pagination";
import Header from "./Header";

function Home() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [slug, setSlug] = useState("");
  const [sideState, setSideState] = useState(false);
 

  const API_KEY = "e715e4b774ae45a4a9dd7302c6fdc0ca";

  const getGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?${category}&page=${currentPage}&search=${slug}&page_size=20&key=${API_KEY}`
      );

      const data = await response.json();
      setGames(data.results);
      setCount(data.count);
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  function pageMove(page) {
    setCurrentPage(page);
  }

  function inputValue(value) {
    setSlug(value);
  }

  function homeClick(event) {
    event.preventDefault();
    setSlug("");
    setCategory("")
    toggle();
    setCurrentPage(1);
  }

  function headerHomeClick(event){
    event.preventDefault();
    setSlug("");
    setCategory("")
    setCurrentPage(1);
  }

  /* api empty query parameter 처리 방법 몰라서 일단 setCategory에 query 자체를 넣어버림 */
  function categoryClick(e, param) {
    e.preventDefault();
    setCategory(`genres=${param.slug}`);
    setSlug(param.slug);
    toggle();
    console.log(category);
  }
  
  useEffect(() => {
    getGames();
    console.log(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, slug, category]);


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
            {slug !== "" ? `${slug} results...` : "All Games"}
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
