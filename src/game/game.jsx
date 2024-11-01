import React from "react";
import { useParams } from "react-router-dom";
import { drinkingGames } from "../lib/games";

const GamePage =()=>{
    const {gameid} = useParams();
    game = drinkingGames.find((game)=> game.id === gameid); 

    console.log(gameid, game)
    if (!game ){return <div>Game Page not Found</div>}


    return (
        <div>
            <p>{game.name}</p>
        </div>
    )
}

export default GamePage;