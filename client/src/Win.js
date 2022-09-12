import { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Win() {

    // const history = useHistory()

    function handlePlayAgain(e) {
        e.preventDefault()
        window.location.replace("/characters")
        // window.location.reload(false)
    }

    return (
        <>
            <div className="win">
                <div class="st-stranger-text">
                    <p><span class="st-drop st-stranger-y">Y</span><span class="st-stranger-o">ou</span><br></br>
                        <span class="st-drop st-stranger-u">D</span> <span class="st-stranger-o">EFEATE</span><span class="st-drop st-stranger-u">D</span>
                        {/* <h1>YOU DIE</h1> */}
                    </p>
                </div>
                <div class="st-stranger-text">
                    <p><span class="st-drop st-stranger-y">T</span><span class="st-stranger-o">HE</span>
                        <br></br>
                        <span class="st-drop st-stranger-u">M</span><span class="st-stranger-o">ONSTE</span>
                        <span class="st-drop st-stranger-u">R</span></p>
                </div>
            </div>
            <div className="fight-button-container">
                <button className="fight-button" onClick={handlePlayAgain} >FIGHT AGAIN</button>
            </div>
        </>
    );
}


export default Win;