import "./App.css";
import DrinkingCard from "./components/drinkingCard/drinkingCard";

function App() {
  return (
    <div className="root">
      <header className="header">
        <h1>Yapkoms drikkeleker</h1>
      </header>
      <div id="testing">
        <DrinkingCard name={"Chandelier"} image={'./julian.jpg'} description={'"Den beste leken. Hei, dette er den aller beste drikkeleken som fins. Jeg elsker å spille Chandelier!! Har du liten tid igjen på vorset? Jeg heter JULIAN OG JEG ELSKER CHANANANADDEDEELIRERRER@!!" - Julian'}/>
      </div>
    </div>
  );
}

export default App;
