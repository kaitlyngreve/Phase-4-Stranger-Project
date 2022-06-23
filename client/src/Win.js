import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Win() {

    const history = useHistory()

    function handlePlayAgain(e) {
        e.preventDefault()
        history.push("/characters")
    }

    return (
        <>
            <body class="win">
                <div class="st-stranger-text">
                    <h1>YOU DEFEATED THE MONSTER</h1>
                </div>
                <div>
                    <button onClick={handlePlayAgain} >FIGHT AGAIN</button>
                </div>
            </body>
        </>
    );
}


export default Win;