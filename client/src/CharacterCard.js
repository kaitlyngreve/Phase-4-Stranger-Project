import { useState } from "react";

function CharacterCard({ character, handleDeleteCharacter, handleNewTeam }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleOutline = () => {
    setIsSelected((isSelected) => !isSelected);
  };

  const handleDelete = () => {
    fetch(`/characters/${character.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(handleDeleteCharacter(character));
  };

  return (
    <>
      <div
        className="character-card-container"
        onClick={() => handleNewTeam(character)}
      >
        <img
          className={isSelected ? "character-card-selected" : "character-card"}
          src={character.image}
          onClick={handleOutline}
          alt="character"
        />
        <div className="multi-purpose-button-container">
          <button
            className="multi-purpose-button"
            onClick={handleDelete}
          >{`Sacrifice ${character.name}`}</button>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
