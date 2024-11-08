import { useParams } from "react-router-dom";
import { drinkingGames } from "../lib/games";

const GamePage = () => {
  const { gameid } = useParams();
  const game = drinkingGames.find((game) => game.id == gameid);
  console.log(game)
  if (!game) {  
    return <div>Game Page not Found</div>;  
  }
  return (
    <div className="gamePage">
      <p>{game.name}</p>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
    </div>
  );
};

export default GamePage;
