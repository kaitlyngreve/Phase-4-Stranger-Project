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
            .then(history.push("/characters"));
    }

    const history = useHistory()

    return (
        <div className='signup'>
            <form onSubmit={handleSubmit} className="st-stranger-text">
                <label htmlFor="username" className="username-1">Username:  </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password" className="password-1">Password:  </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password_confirmation" className='confirm-pass'>Confirm Password:  </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit" className="multi-purpose-button"> Submit </button><br></br>
            </form>
        </div>
    );
}


export default SignUp;
