import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function MonsterCard({ monster, handleHiddenButton, handleResults }) {

    return (
        <>
            <div className="monster-card">
                <h2>{monster.name}</h2>
                <img src={monster.image} />
                <p className="description-monster">{monster.monster_description}</p>
            </div>
        </>
    );
}


export default MonsterCard;