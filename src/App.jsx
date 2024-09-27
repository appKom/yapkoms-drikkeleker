import "./App.css";
import DrinkingCard from "./components/drinkingCard/drinkingCard";

function App() {
  return (
    <div className="root">
      <header className="header">
        <h1>Yapkoms drikkeleker</h1>
      </header>
      <div id="testing">
        <DrinkingCard name={"6 minutes"} image={'./bekk.svg'} description={"Den beste leken."}/>
      </div>
    </div>
  );
}

export default App;
