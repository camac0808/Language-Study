import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const [movies, setMovies] = useState("");
  const API_KEY = "e715e4b774ae45a4a9dd7302c6fdc0ca";

  // detail 가져오기
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        console.error(err);
      }
    };
    console.log(id);
    console.log(details);
    getDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 트레일러 가져오기
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results[0].data.max);
        console.log(movies);
      } catch (err) {
        console.error(err);
      }
    };
    getMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="details container">
      <div className="details-descriptions">
        <h1>{details.name}</h1>
        <h3>{details && details.genres.map((g) => `${g.name} | `)}</h3>
        <p>{details.description_raw}</p>
        <a href={details.metacritic_url}>Metacritic</a>
        <br />
        <a href={details.website}>{details.name} Homepage</a>
      </div>

      <div className="details-images">
        <video width="400" height="300" src={movies} type="video/mp4" controls></video>
        <div style={{display: "flex"}}>
          <img src={details.background_image} alt={details.name}></img>
          <img src={details.background_image_additional} alt={details.name}></img>
        </div>
      </div>
    </div>
  );
}
