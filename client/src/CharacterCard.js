import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function CharacterCard({ character, handleClick }) {
    const [monsterId, setMonsterId] = useState(null)


    // console.log(team)


    // function handleClick() {
    //     setTeamId(team.id)
    // }

    // function handleForm(e) { //how we will handle the form
    //     let value = '' //this will display whatever the topping value is which is below on line 57
    //     if (e.target.name === 'Hellfire Club') {   //checking to see if the pizza that is being clicked on is veggie based on 
    //         value = e.target.value === 'Hellfire Club'  //radio button. so if true then the value returned will be 'e.target.value' which will be Vegetarian caps
    //     }
    //     else if (e.target.name === 'Scoops Ahoy') {   //checking to see if the pizza that is being clicked on is veggie based on 
    //         value = e.target.value === 'Scoops Ahoy'  //radio button. so if true then the value returned will be 'e.target.value' which will be Vegetarian caps
    //     }
    //     else if (e.target.name === 'Starcourt') {   //checking to see if the pizza that is being clicked on is veggie based on 
    //         value = e.target.value === 'Starcourt'  //radio button. so if true then the value returned will be 'e.target.value' which will be Vegetarian caps
    //     }
    //     else if (e.target.name === 'Hawkins High') {   //checking to see if the pizza that is being clicked on is veggie based on 
    //         value = e.target.value === 'Hawkins High'  //radio button. so if true then the value returned will be 'e.target.value be 'e.target.value' which will be Vegetarian caps
    //     }
    //     else { // if it is not veggie then the value will become the e.target.value which is false?
    //         value = e.target.value
    //     }
    //     handleChangeTeam(e.target.value, value) //The handlechangetopping will display the name of the pizza selected in the form as editable
    // }   //the form will display the pizza topping, the size, and the veggie or not radio according to selected

    // console.log("new log:", team.team_name)
    // function handleChangeTeam(e) {
    //     // console.log(e.target.value)
    // }

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
