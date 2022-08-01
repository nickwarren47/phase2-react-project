import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeMonArraySearch }) {
  const pokeMonList = pokeMonArraySearch.map((pokeMon) => (
    <PokemonCard
    key={pokeMon.id}
    name={pokeMon.name}
    hp={pokeMon.hp}
    spriteFront={pokeMon.sprites.front}
    spriteBack={pokeMon.sprites.back}
    />
  ))
  return (
    <div>
      <Card.Group itemsPerRow={6}>
        {pokeMonList}
      </Card.Group>
    </div>
    )
}
export default PokemonCollection;

