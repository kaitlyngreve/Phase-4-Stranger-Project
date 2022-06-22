import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function MonsterCard({ monster }) {

    // let newFight = newTeam.map((teamMember) => teamMember)
    // console.log(newFight[0])

    return (
        <>
            <div>
                <h2>{monster.name}</h2>
                <img src={monster.image} />
                <p>{monster.monster_description}</p>
            </div>
        </>
    );
}


export default MonsterCard;