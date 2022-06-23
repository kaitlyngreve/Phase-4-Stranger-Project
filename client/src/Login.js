import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: username,
            password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(user => {
                            setUser(user)
                            setIsAuthenticated(true)
                        })
                        .then(history.push("/characters"))

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
    }

    // function handleLogout() {
    //     fetch("/logout", {
    //         method: "DELETE"
    //     })
    //         .then((r) => r.json())
    //         .then(setUsername(null))
    // }

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
                <label>Password:  </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {/* <button>Logout</button> */}
            </form>
            {error ? <div>{error}</div> : null}
        </div>
    );
}

export default Login;