import { useState, useEffect } from "react";
import MonsterCard from "./MonsterCard"
import NewTeamCard from "./NewTeamCard";
import Win from "./Win";
import Lose from "./Lose";
// import { useHistory } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Monsters({ monsters, newTeam }) {
    const [results, setResults] = useState("")
    const [isAttack, setIsAttack] = useState(true)

    const handleAttack = () => {
        setIsAttack(isAttack => !isAttack)
    }

    // const history = useHistory()

    function handleHiddenButton(e) {
        { results !== "Monster Wins" ? window.location.replace("/win") : window.location.replace("/lose") }
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
                {monsters.map(monster => <MonsterCard monster={monster} handleHiddenButton={handleHiddenButton} handleResults={handleResults} />)}
            </div>
            <div className="fight-character-cards-container" >
                {newTeam.map(teamMember => <NewTeamCard teamMember={teamMember} />)}
            </div>
            <div className="attack-div">
                <p className="st-stranger-text">QUICK! You HAVE to attack the Demogorgon!</p>
                <div onClick={handleResults}>
                    {isAttack ? <button className='multi-purpose-button-3' onClick={handleAttack} >ATTACK
                    </button> : <button className='multi-purpose-button-3' onClick={handleAttack} >⚔️ ATTACKING ⚔️
                    </button>}
                </div>
            </div>
            <p className="st-stranger-text-2">Now, let's see if we can find a gate and get out of here!</p>
            <div className="multi-purpose-button-container-2">
                <button className='multi-purpose-button-4' onClick={handleHiddenButton}>
                    DID YOU ESCAPE THE UPSIDE DOWN????</button>
            </div>
        </>
    );
}


export default Monsters;