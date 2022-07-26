/* eslint-disable array-callback-return */
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  faPlaystation,
  faWindows,
  faXbox,
  faApple,
  faAndroid,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Game({ id, name, image, genres, platforms, metacriticScore }) {
  return (
    <div id={id} className="game" data-aos="fade-up" data-aos-delay="400">
      <div className="game-card">
        <Link to={`/games/${id}`}>
          <img src={image} alt={name} />
        </Link>

        <div className="game-info">
          <Link to={`/games/${id}`}>
            <h3 className="game-info-title">{name}</h3>
          </Link>
          <p>{genres.map((g) => `${g.name} | `)} </p>

          <p>
            {platforms.map((p) => {
              if (p.platform.slug === "playstation") {
                return <FontAwesomeIcon icon={faPlaystation} style={{ marginRight: "4px" }} />;
              } else if (p.platform.slug === "pc") {
                return <FontAwesomeIcon icon={faWindows} style={{ marginRight: "4px" }} />;
              } else if (p.platform.slug === "xbox") {
                return <FontAwesomeIcon icon={faXbox} style={{ marginRight: "4px" }} />;
              } else if (p.platform.slug === "nintendo") {
                return <FontAwesomeIcon icon={faN} style={{ marginRight: "4px" }} />;
              } else if (p.platform.slug === "ios") {
                return <FontAwesomeIcon icon={faApple} style={{ marginRight: "4px" }} />;
              } else if (p.platform.slug === "android") {
                return <FontAwesomeIcon icon={faAndroid} style={{ marginRight: "4px" }} />;
              } else if (p.platform.slug === "linux") {
                return <FontAwesomeIcon icon={faLinux} style={{ marginRight: "4px" }} />;
              }
            })}
          </p>
          <i className="bi bi-nintendo-switch"></i>
        </div>
        <CircularProgressbar
          className={metacriticScore == null ? "hidden" : "metacriticScore"}
          styles={buildStyles({
            textSize: "30px",
            backgroundColor: "#322f35",
            textColor: "#fff",
            trailColor: "transparent",
            pathColor:
              (metacriticScore <= 100 && "#5FD068") ||
              (metacriticScore <= 75 && "#faea48") ||
              (metacriticScore <= 35 && "#bd2327"),
          })}
          percentage={metacriticScore}
          value={metacriticScore}
          text={metacriticScore}
          background
          backgroundPadding={6}
        />
      </div>
    </div>
  );
}

export default Game;
