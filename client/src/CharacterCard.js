import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function CharacterCard({ character, handleClick }) {
    const [monsterId, setMonsterId] = useState(null)

    return (
        <>
            <div onClick={() => handleClick(character)}>
                <h2>{character.name}</h2>
                <h1>{character.age}</h1>
                <img src={character.image} />
            </div>
        </>
    );
}


export default CharacterCard;
