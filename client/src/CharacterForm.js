import { useState, useEffect } from "react";

function CharacterForm({ handleNewCharacterForm }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [strength, setStrength] = useState(0)
    const [intellligence, setIntelligence] = useState(0)
    const [image, setImage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/characters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                age: age,
                strength: strength,
                intelligence: intellligence,
                image: image
            })
        })
            .then(r => r.json())
            .then(data => handleNewCharacterForm(data))

        setName("")
        setAge(0)
        setStrength(0)
        setIntelligence(0)
        setImage("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <h4 className="form-header">Add a Character</h4>
                <label className="form-label">Name:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Character Name'
                        value={name}
                        onChange={e => setName(e.target.value)}>
                    </input>
                </label>
                <label>
                    Age:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Character is _____ years old ...'
                        value={age}
                        onChange={e => setAge(e.target.value)}>
                    </input>
                </label>
                <label>
                    Strength:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='0-10, 10 is the highest'
                        value={strength}
                        onChange={e => setStrength(e.target.value)}>
                    </input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Intelligence:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='0-10, 10 is the highest'
                        value={intellligence}
                        onChange={e => setIntelligence(e.target.value)}>
                    </input>
                </label>
                <label>
                    Character Image:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Portrait'
                        value={image}
                        onChange={e => setImage(e.target.value)}>
                    </input>
                </label>
                <br></br>
                <br></br>
                <button className="form-button">Add Character to Dock</button>
            </form>
        </div>
    )
}


export default CharacterForm;