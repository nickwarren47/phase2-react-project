import React, { useState } from "react";

function ItemForm({ onAddShortCut }) {

  const [keystrokeState, setKeyStrokeState] = useState("");
  const [actionState, setActionState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [worksInState, setWorksInState] = useState("");

  function handleSubmitShortCuts(e) {
    // e.preventDefault();
    fetch("http://localhost:5000/arrayOfShortCuts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyStroke: keystrokeState,
        action: actionState,
        category: categoryState,
        worksin: worksInState,
      }),
    })
      .then((res) => res.json())
      .then((newShortCut) => onAddShortCut(newShortCut));
  }

  return (
    <div className="new-shortCut-form">
    <h2>New Shortcut</h2>
    <form onSubmit={handleSubmitShortCuts}>
    <label>
      <input
        type="text"
        name="keyStroke"
        // value=
        placeholder="Keystroke here..."
        onChange={(e) => setKeyStrokeState(e.target.value)}
      />
    </label>
    <label>
      <input
        type="text"
        name="action"
        placeholder="Action here..."
        // value={actionState}
        onChange={(e) => setActionState(e.target.value)}
      />
    </label>
      <label>
        Category:
        <select 
        name="category" 
        // value={categoryState}
        onChange={(e) => setCategoryState(e.target.value)}
        >
          <option value="All">Select category</option>
          <option value="General">General</option>
          <option value="Basic Editing">Basic editing</option>
          <option value="Multi-cursor and selection">Multi-cursor and selection</option>
          <option value="Search and replace">Search and replace</option>
          <option value="Rich languages editing">Rich languages editing</option>
          <option value="Navigation">Navigation</option>
          <option value="Editor management">Editor management</option>
          <option value="File management">File management</option>
          <option value="Display">Display</option>
          <option value="Debug">Debug</option>
          <option value="Integrated Terminal">Integrated terminal</option>
        </select>
      </label>
      <label>
        Works in:
        <select name="worksIn" 
        // value={worksInState}
        onChange={(e) => setWorksInState(e.target.value)}
        >
          <option value="Macos">MacOS </option>
          <option value="Windows">Windows</option>
          <option value="Linux">Linux</option>
        </select>
      </label> 
  
      <button type="submit">Add Shortcut</button>
    </form>
  </div>
  );
}

export default ItemForm;
