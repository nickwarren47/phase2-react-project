import React from "react";
import { Button, Form, Message } from 'semantic-ui-react';

function Search({ onChange }) {
;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <label>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search action"
          onChange={onChange}
        />
        <button type="submit">🔑</button>
      </form>
    </label>
  );
}

export default Search;