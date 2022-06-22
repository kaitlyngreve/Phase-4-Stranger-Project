import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Lose() {

    const history = useHistory()

    function handlePlayAgain(e) {
        e.preventDefault()
        history.push("/characters")
    }

    return (
        <>
            <div>
                <h1>YOU DIE</h1>
            </div>
            <div>
                <button onClick={handlePlayAgain} >FIGHT AGAIN</button>
            </div>
        </>
    );
}


export default Lose;