import { useEffect, useState } from "react";
import Game from "./Game";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Pagination";
import Header from "./Header";

function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const API_KEY = "ea46da76162f45f8a179463a877ff12e";
  const getGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?page=${currentPage}&page_size=20&key=${API_KEY}`
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

  useEffect((  ) => {
    getGames();
    console.log(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  function pageMove(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <Header />
      <div className="container">
        {loading ? (
          <div className="loading">
            <h1 >Loading...</h1>
            <div className="fa-3x">
              <FontAwesomeIcon icon={faSpinner} spin style={{color: "white"}}/>
            </div>
          </div>
        ) : (
          <h1 className="main-title" data-aos="fade-up">All Games</h1>
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
