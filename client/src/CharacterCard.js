import { useState, useEffect } from "react";

function CharacterCard({ character, handleDeleteCharacter, handleNewTeam, filteredCharacters }) {
    const [monsterId, setMonsterId] = useState()
    const [isSelected, setIsSelected] = useState(false)

    const handleOutline = () => {
        setIsSelected(isSelected => !isSelected)
    }

    const handleDelete = () => {
        fetch(`/characters/${character.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(handleDeleteCharacter(character));
    }

    return (
        <>
            <div className="character-card-container" onClick={() => handleNewTeam(character)}>
                {/* <h2 className="character-card" id="character-name">{character.name}</h2>
                <h1 className="character-card">{character.age}</h1> */}
                <img className={isSelected ? "character-card-selected" : "character-card"} src={character.image} onClick={handleOutline} />
                <div className="delete-button-container">
                    <button className="delete-button" onClick={handleDelete}>{`Sacrifice ${character.name}`}</button>
                </div>
            </div>
        </>
    );
}


export default CharacterCard;
