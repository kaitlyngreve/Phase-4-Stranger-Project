import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
            .then((r) => r.json())
            .then((user) => onLogin(user));
    }

    const history = useHistory()

    function handleLoginClick(e) {
        e.preventDefault()
        history.push("/characters")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} class="st-stranger-text" >
                <label htmlFor="username">Username:  </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" onClick={handleLoginClick}>Login</button>
            </form>
        </div>
    );
}

export default Login;