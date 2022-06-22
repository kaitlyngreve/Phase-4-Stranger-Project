import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Characters from "./Characters";
import SignUp from "./Signup";
import Login from "./Login";

function App() {
  const [characters, setCharacters] = useState([])
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState({})
  const [newTeam, setNewTeam] = useState([])

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

  let character = characters.map((character) => character)
  // console.log(character)

  function handleChangeTeam(e, team_id) {
    console.log(e.target.value)
    let myTeam = teams.filter(team => team.team_name === e.target.value)
    console.log(myTeam[0].id)
    const updatedCharacter = {
      team_id: myTeam[0].id,
      monster_id: 1
    }
    newTeam.map(character => {
      fetch(`/characters/${character.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          updatedCharacter
        ),
      })
        .then(r => r.json())
        .then(data => console.log('response', data))
    }
    )
  }

  function handleNewTeam(character) {
    setNewTeam(newTeam => [...newTeam, character])
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
            <Characters characters={characters} teams={teams} handleChangeTeam={handleChangeTeam} handleNewTeam={handleNewTeam} newTeam={newTeam} />
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
