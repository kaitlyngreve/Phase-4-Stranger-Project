import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((r) => r.json())
            .then(onLogin);
    }

    const history = useHistory()

    function handleSignupClick(e) {
        e.preventDefault()
        history.push("/characters")
    }

    return (
        <div class='signup'>
            <form onSubmit={handleSubmit} class="st-stranger-text">
                <label htmlFor="username" class="username-1">Username:  </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password" class="password-1">Password:  </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password_confirmation">Confirm Password:  </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit" class="signup-sub" onClick={handleSignupClick}> Submit </button><br></br>
                <button type="login-button" class="click-here" onClick={handleSignupClick}>Click Here if You Have an Account</button>
            </form>
        </div>
    );
}


export default SignUp;
