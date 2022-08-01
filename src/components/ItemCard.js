import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, spriteFront, spriteBack }) {

  const [isClicked, setIsClicked] = useState(false)

  function handleCardFlip() {
    setIsClicked((isClicked) => !isClicked)
  }

  return (
    <Card onClick={handleCardFlip}>
      <div>
        <div className="image">
          <img alt="oh no!" src={isClicked ? spriteBack : spriteFront}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
