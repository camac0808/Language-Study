import { useEffect, useState } from "react";
import Game from "./Game";

function Home() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const API_KEY = "72ed8cbf412c498da945dcfeedf4f583";
  const getGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      const data = await response.json();
      setGames(data.results);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getGames();
  }, []);
  console.log(games);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>20 Games</h1>}
      {games.map((game) => {
        return (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            image={game.background_image}
            genres={game.genres}
            platforms={game.platforms}
          />
        );
      })}
    </div>
  );
}

export default Home;
