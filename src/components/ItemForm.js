import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokeUrl }) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  const addPokemon = () => {
    const postObj = {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        name,
        hp,
        sprites: {
          front,
          back,
        },
      }),
    }
    fetch(pokeUrl, postObj)
    .then((res) => res.json())
    .then((newPokemon) => {
      console.log(newPokemon)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={addPokemon}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
            />
          <Form.Input fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input fluid label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input fluid label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
