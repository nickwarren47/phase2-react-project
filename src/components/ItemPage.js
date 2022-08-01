import React, { useEffect, useState } from "react";
import ItemCollection from "./ItemCollection";
import ItemForm from "./ItemForm";
import Search from "./Search";

function ItemPage() {

  return (
    <>
      <h1>Item Searcher</h1>
      <br />
      <ItemForm />
      <br />
      <Search />
      <br />
      <ItemCollection 
      />
    </>
  );
}

export default ItemPage;
