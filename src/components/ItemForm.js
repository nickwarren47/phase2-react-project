import React, { useState } from "react";
import { Button, Form, Message } from 'semantic-ui-react'

function ItemForm({ onAddShortCut }) {

  const [keystrokeState, setKeyStrokeState] = useState("");
  const [actionState, setActionState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [worksInState, setWorksInState] = useState("");

  function handleSubmitShortCuts(e) {
    // console.log(keystrokeState, actionState, categoryState, worksInState)
    e.preventDefault();
    fetch("http://localhost:5000/arrayOfShortCuts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyStroke: keystrokeState,
        action: actionState,
        category: categoryState,
        worksIn: worksInState,
      }),
    })
      .then((res) => res.json())
      .then((newShortCut) => onAddShortCut(newShortCut))
      .then(() => {
        setKeyStrokeState("")
        setActionState("")
        setCategoryState("")
        setWorksInState("")
      })
  }

//   <Form success>
//   <Form.Input label='Email' placeholder='joe@schmoe.com' />
//   <Message
//     success
//     header='Form Completed'
//     content="You're all signed up for the newsletter"
//   />
//   <Button>Submit</Button>
// </Form>

  return (
    <div className="new-shortCut-form">
    <h2>New Shortcut</h2>
    <Form success onSubmit={handleSubmitShortCuts}>
    <label>
    <Form.Input
        type="text"
        name="keyStroke"
        // value={keyStroke}
        placeholder="Keystroke here..."
        onChange={(e) => setKeyStrokeState(e.target.value)}
      />
    </label>
    <label>
    <Form.Input
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
          <option value="All">Select System </option>
          <option value="MacOS">MacOS </option>
          <option value="Windows">Windows</option>
          <option value="Linux">Linux</option>
        </select>
      </label> 
  
      <Button type="submit">Add Shortcut</Button>
    </Form>
  </div>
  );
}

export default ItemForm;
