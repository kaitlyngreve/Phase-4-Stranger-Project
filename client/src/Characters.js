import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import { useHistory } from "react-router-dom";
import CharacterForm from "./CharacterForm";


function Characters({ characters, teams, handleChangeTeam, handleNewTeam, newTeam, handleNewCharacterForm }) {

    let team_id = teams.map(team => team.id)

    const history = useHistory()

    function handleTeamClick(e) {
        e.preventDefault()
        history.push("/monster_fights")
    }


    function handleForm(e) {
        // console.log(team_id)
        let value = ''
        if (e.target.value === 'Hellfire Club') {
            value = team_id[0]
            console.log(value)
        }
        else if (e.target.value === 'Scoops Ahoy') {
            value = team_id[1]
            console.log(value)
        }
        else if (e.target.value === 'Starcourt') {
            value = team_id[2]
            console.log(value)
        }
        else if (e.target.value === 'Hawkins High') {
            value = team_id[3]
            console.log(value)
        }
        handleChangeTeam(e)
    }


    return (
        <div>
            <h2> Choose your FOUR characters!</h2>
            <div className="character-cards-container">
                {characters.map(character => <CharacterCard character={character} key={character.id} handleChangeTeam={handleChangeTeam} handleNewTeam={handleNewTeam} newTeam={newTeam} />)}
            </div>
            <CharacterForm handleNewCharacterForm={handleNewCharacterForm} />
            <h2> Choose your team name! </h2>
            <div className="dropdown">
                <select className="form-control" name="team" value={teams} onChange={handleForm}>
                    <option value=''>Select Team Name</option>
                    <option value="Hellfire Club">Hellfire Club</option>
                    <option value="Scoops Ahoy">Scoops Ahoy</option>
                    <option value="Starcourt">Starcourt</option>
                    <option value="Hawkins High">Hawkins High</option>
                </select>
            </div>
            <button onClick={handleTeamClick}>FIGHTTTTT</button>
        </div>
    );
}


export default Characters;
