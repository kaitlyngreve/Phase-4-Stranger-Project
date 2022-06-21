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
        console.log(character.name)
    }

    function handleForm(e) { //how we will handle the form
        // debugger
        let value = '' //this will display whatever the topping value is which is below on line 57
        if (e.target.value === 'Hellfire Club') {   //checking to see if the pizza that is being clicked on is veggie based on 
            value = 'Hellfire Club'// value = e.target.value === 'Hellfire Club'  //radio button. so if true then the value returned will be 'e.target.value' which will be Vegetarian caps
        }
        else if (e.target.value === 'Scoops Ahoy') {   //checking to see if the pizza that is being clicked on is veggie based on 
            value = 'Scoops Ahoy' //radio button. so if true then the value returned will be 'e.target.value' which will be Vegetarian caps
        }
        else if (e.target.value === 'Starcourt') {   //checking to see if the pizza that is being clicked on is veggie based on 
            value = 'Starcourt'  //radio button. so if true then the value returned will be 'e.target.value' which will be Vegetarian caps
        }
        else if (e.target.value === 'Hawkins High') {   //checking to see if the pizza that is being clicked on is veggie based on 
            value = 'Hawkins High'  //radio button. so if true then the value returned will be 'e.target.value be 'e.target.value' which will be Vegetarian caps
        }
        handleChangeTeam(e.target.value, value) //The handlechangetopping will display the name of the pizza selected in the form as editable
    }   //the form will display the pizza topping, the size, and the veggie or not radio according to selected

    // console.log("new log:", team.team_name)


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
