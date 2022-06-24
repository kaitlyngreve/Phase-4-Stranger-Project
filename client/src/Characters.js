import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import { useHistory } from "react-router-dom";
import CharacterForm from "./CharacterForm";


function Characters({ characters, teams, handleChangeTeam, handleNewTeam, newTeam, handleNewCharacterForm, handleDelete, filteredCharacters, handleDeleteCharacter }) {

    let team_id = teams.map(team => team.id)

    const history = useHistory()

    function handleTeamClick(e) {
        e.preventDefault()
        history.push("/monster_fights")
    }


    function handleForm(e) {
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
        <div >
            <h2 className="st-character-title">Choose your FOUR characters!</h2>
            <div className="instructions">
                <div className="instructions-header">
                    <h4>We're in the Upside Down ...</h4>
                </div>
                <div className="instructions-p">
                    <p>And we have a Demogorgon to fight!
                        You can choose four of our Stranger Things friends to go with you,
                        but pick carfully. You need enough strength to defeat the unbeatable Demogorgon.
                        Once you select your team, choose your team name and then FIGHT!
                    </p>
                </div>
            </div>
            <div className="character-cards-container">
                {characters.map(character => <CharacterCard character={character} key={character.id} handleChangeTeam={handleChangeTeam} handleNewTeam={handleNewTeam} newTeam={newTeam} handleDelete={handleDelete} filteredCharacters={filteredCharacters} handleDeleteCharacter={handleDeleteCharacter} />)}
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
