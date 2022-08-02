import React from "react";

function ItemCard({ action, worksIn, category, keyStroke }) {

  return (
      <div className="card">
        <h1>{keyStroke}</h1>
        <h2>{action}</h2>
        <p>{worksIn}</p>
        <p>{category}</p>
      </div>
  );
}

export default ItemCard;
