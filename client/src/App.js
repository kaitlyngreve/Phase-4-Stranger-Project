import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Characters from "./Characters";
import SignUp from "./Signup";
import Login from "./Login";

function App() {
  const [characters, setCharacters] = useState([])
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState({})

  useEffect(() => {
    fetch("/characters")
      .then((r) => r.json())
      .then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    fetch("/teams")
      .then((r) => r.json())
      .then((team) => setTeams(team));
  }, []);

  const handleSelectedTeam = (team) => {
    setSelectedTeam(team)
  }

  function handleChangeTeam(e) {
    // console.log(e.target.value)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/characters">
            <Characters characters={characters} teams={teams} handleChangeTeam={handleChangeTeam} />
          </Route>
          <Route exact path="/teams">
            <h1>Teams Count: </h1>
          </Route>
          <Route exact path="/monster_fights">
            <h1>Monster Fights Count: </h1>
          </Route>
          <Route exact path="/win">
            <h1>You won count: </h1>
          </Route>
          <Route exact path="/lose">
            <h1>LOSER Count: </h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
