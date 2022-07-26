import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const API_KEY = "ea46da76162f45f8a179463a877ff12e";

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

  console.log(details);

  return (
    <div className="details">
      <h1>{details.name}</h1>
      <h3>{details && details.genres.map((g) => `${g.name} | `)}</h3>
      <img src={details.background_image} alt={details.name}></img>
      <img src={details.background_image_additional} alt={details.name}></img>
      <p>{details.description_raw}</p>
      <a href={details.metacritic_url}>Metacritic</a>
      <br />
      <a href={details.website}>{details.name} Homepage</a>
    </div>
  );
}
