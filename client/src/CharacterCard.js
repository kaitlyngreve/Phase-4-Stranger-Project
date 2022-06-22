import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function CharacterCard({ character, handleChangeTeam, handleNewTeam }) {
    const [monsterId, setMonsterId] = useState()

    return (
        <>
            <div className="character-card-container">
                {/* <h2 className="character-card" id="character-name">{character.name}</h2>
                <h1 className="character-card">{character.age}</h1> */}
                <img className="character-card" src={character.image} onClick={() => handleNewTeam(character)} />
            </div>
        </>
    );
}


export default CharacterCard;
