import { Link } from 'react-router-dom';

function Game(props) {
  return (
    <ul>
      <li>
        <div id={props.id}>
          <Link to={`/games/${props.id}`}><h3>{props.name}</h3></Link>
          <Link to={`/games/${props.id}`}><img src={props.image} alt={props.name} /></Link>
          <p>{props.genres.map((g) => `${g.name} | `)} </p>
          <p>{props.platforms.map((p) => `${p.platform.name} | `)}</p>
        </div>
      </li>
    </ul>
  );
}

export default Game;
