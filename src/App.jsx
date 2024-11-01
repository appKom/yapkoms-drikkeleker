import "./App.css";
import DrinkingCard from "./components/drinkingCard/DrinkingCard";
import { drinkingGames } from "./lib/games";
("./lib/games.js");

function App() {
  return (
    <div className="root">
      <header className="header">
        <h1>Yapkoms drikkeleker</h1>
      </header>
      <div id="parentContainer">
        <div id="drinkingGamesContainer">
          {drinkingGames.map((game, index) => (
            <DrinkingCard
              key={index}
              id={game.id}
              name={game.name}
              image={game.image}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
