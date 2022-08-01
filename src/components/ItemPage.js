import React, { useEffect, useState } from "react";
import ItemCollection from "./ItemCollection";
import ItemForm from "./ItemForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function ItemPage() {

  return (
    <Container>
      <h1>Item Searcher</h1>
      <br />
      <ItemForm pokeUrl={pokeUrl}/>
      <br />
      <Search onSearchChange={handleSearch}/>
      <br />
      <ItemCollection 
        ItemArraySearch={ItemToDisplay}
      />
    </Container>
  );
}

export default ItemPage;
