import React from "react";
import ItemCard from "./ItemCard";

function ItemCollection({shortCuts, snippets}) {
  // map here over card
    console.log(shortCuts)
    const searchShortCuts = () => (
        shortCuts.map((shortCut) => (
          <ItemCard 
           keyStroke={shortCut.keyStroke}
           action={shortCut.action}
           worksIn={shortCut.worksIn}
           category={shortCut.category}
          />
        )
        )
    )
  return (
    <div>
      {searchShortCuts()}
    </div>
    )
}
export default ItemCollection;

