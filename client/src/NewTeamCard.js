import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function NewTeamCard({ teamMember }) {
    // let teamMember = newTeam.map((teamMember) => teamMember)
    console.log(teamMember)

    return (
        <>
            <div>
                <img src={teamMember.image} />
            </div>
        </>
    );
}


export default NewTeamCard;