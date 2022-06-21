import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterCard from "./CharacterCard";


function Characters({ characters, teams }) {
    const team = teams.map(team => (team))

    return (
        <div>
            <h2>Choose your characters!</h2>
            {characters.map(character => <CharacterCard character={character} key={character.id} team={team} />)}
        </div>
    );
}


export default Characters;
