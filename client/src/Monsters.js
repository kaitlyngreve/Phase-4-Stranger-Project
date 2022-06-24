import { useState, useEffect } from "react";
import MonsterCard from "./MonsterCard"
import NewTeamCard from "./NewTeamCard";
import Win from "./Win";
import Lose from "./Lose";
import { useHistory } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Monsters({ monsters, newTeam }) {
    const [results, setResults] = useState("")

    const history = useHistory()

    function handleHiddenButton(e) {
        { results !== "Monster Wins" ? history.push("/win") : history.push("/lose") }
    }


    function handleResults() {
        let teamStrength = 0
        newTeam.forEach(character => {
            teamStrength += character.strength + character.intelligence
        })
        console.log(teamStrength)
        if (teamStrength >= monsters[0].monster_strength) {
            setResults("Team Wins")
        }
        else if (teamStrength < monsters[0].monster_strength) {
            setResults("Monster Wins")
        }
    }

    return (
        <>
            <div class="st-stranger-text">
                {monsters.map(monster => <MonsterCard monster={monster} />)}
            </div>
            <div className="fight-character-cards-container" >
                {newTeam.map(teamMember => <NewTeamCard teamMember={teamMember} />)}
            </div>
            <div className="button-fight">
                <button onClick={handleResults}>Click to Attack</button>
                <button onClick={handleHiddenButton}>
                    OUTCOME
                </button>
            </div>
        </>
    );
}


export default Monsters;