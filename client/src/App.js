import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Characters from "./Characters";
import Monsters from "./Monsters";
import Win from "./Win";
import Lose from "./Lose";

function App() {
  const [characters, setCharacters] = useState([]);
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState([]);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("/characters")
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  useEffect(() => {
    fetch("/monsters")
      .then((r) => r.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    fetch("/teams")
      .then((r) => r.json())
      .then((team) => setTeams(team));
  }, []);

  const handleNewCharacterForm = (data) => {
    setCharacters([...characters, data]);
  };

  const handleDeleteCharacter = (char) => {
    console.log(char);
    let filteredChar = characters.filter(
      (character) => character.id !== char.id
    );
    setCharacters(filteredChar);
  };

  function handleChangeTeam(e, team_id) {
    console.log(e.target.value);
    let myTeam = teams.filter((team) => team.team_name === e.target.value);
    console.log(myTeam[0].id);
    const updatedCharacter = {
      team_id: myTeam[0].id,
    };
    newTeam.map((character) => {
      return fetch(`/characters/${character.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedCharacter),
      })
        .then((r) => r.json())
        .then((data) => console.log("response", data));
    });
  }

  function handleNewTeam(character) {
    setNewTeam((newTeam) => [...newTeam, character]).slice(0, 4);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Characters
              handleDeleteCharacter={handleDeleteCharacter}
              characters={characters}
              teams={teams}
              handleChangeTeam={handleChangeTeam}
              handleNewTeam={handleNewTeam}
              newTeam={newTeam}
              handleNewCharacterForm={handleNewCharacterForm}
            />
          </Route>
          <Route exact path="/teams">
            <h1>Teams Count: </h1>
          </Route>
          <Route exact path="/monster_fights">
            <Monsters newTeam={newTeam} monsters={monsters} />
          </Route>
          <Route exact path="/win">
            <Win />
          </Route>
          <Route exact path="/lose">
            <Lose />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
