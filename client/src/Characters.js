import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterCard from "./CharacterCard";


function Characters({ characters, teams, handleChangeTeam }) {
    const [teamId, setTeamId] = useState(null)
    // const [team, setTeam] = useState([])

    const team = teams.map(team => {
        return team.id
    })

    function handleClick(character) {
        console.log(character.id)
    }

    function handleForm(e) {
        let value = ''
        if (e.target.value === 'Hellfire Club') {
            value = 'Hellfire Club'
        }
        else if (e.target.value === 'Scoops Ahoy') {
            value = 'Scoops Ahoy'
        }
        else if (e.target.value === 'Starcourt') {
            value = 'Starcourt'
        }
        else if (e.target.value === 'Hawkins High') {
            value = 'Hawkins High'
        }
        handleChangeTeam(e.target.value, value)
    }




    return (
        <div>
            <h2> Choose your team name! </h2>
            <div className="dropdown">
                <select className="form-control" name="team" value={team.id} onChange={handleForm}>
                    <option value="Hellfire Club">Hellfire Club</option>
                    <option value="Scoops Ahoy">Scoops Ahoy</option>
                    <option value="Starcourt">Starcourt</option>
                    <option value="Hawkins High">Hawkins High</option>
                </select>
            </div>
            <h2> Choose your characters!</h2>
            {characters.map(character => <CharacterCard character={character} key={character.id} handleClick={handleClick} />)}
        </div>
    );
}


export default Characters;
