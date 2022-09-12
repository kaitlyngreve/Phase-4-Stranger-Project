import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterCard from "./CharacterCard";
// import { useHistory } from "react-router-dom";
import CharacterForm from "./CharacterForm";


function Characters({ characters, teams, handleChangeTeam, handleNewTeam, newTeam, handleNewCharacterForm, handleDelete, filteredCharacters, handleDeleteCharacter }) {
    const [selectedTeamName, setSelectedTeamName] = useState('')

    let team_id = teams.map(team => team.id)

    // const history = useHistory()

    function handleTeamClick(e) {
        e.preventDefault()
        window.location.replace("/monster_fights")
    }


    function handleForm(e) {
        let value = ''
        if (e.target.value === 'Hellfire Club') {
            value = team_id[0]
            setSelectedTeamName(e.target.value)
            console.log(value)
        }
        else if (e.target.value === 'Scoops Ahoy') {
            value = team_id[1]
            setSelectedTeamName(e.target.value)
            console.log(value)
        }
        else if (e.target.value === 'Starcourt') {
            value = team_id[2]
            setSelectedTeamName(e.target.value)
            console.log(value)
        }
        else if (e.target.value === 'Hawkins High') {
            value = team_id[3]
            setSelectedTeamName(e.target.value)
            console.log(value)
        }
        else { setSelectedTeamName(e.target.value) }
        handleChangeTeam(e)
    }


    return (
        <div >
            <div className="st-character-title-container">
                <h2 className="st-character-title">Peculiar Entities</h2>
                <h2 className="st-character-title-2">a stranger things game</h2>
            </div>
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
            <div className="dropdown">
                <h2 className="instructions-header"> Choose your team name! </h2>
                <select className="form-control" name="team" value={selectedTeamName} onChange={handleForm}>
                    <option value='Select Team Name'>Select Team Name</option>
                    <option value={"Hellfire Club"}>Hellfire Club</option>
                    <option value="Scoops Ahoy">Scoops Ahoy</option>
                    <option value="Starcourt">Starcourt</option>
                    <option value="Hawkins High">Hawkins High</option>
                </select>
            </div>
            <div className="fight-button-container" >
                <button className="fight-button" onClick={handleTeamClick}>Travel into Upside Down</button>
            </div>
        </div>
    );
}


export default Characters;
