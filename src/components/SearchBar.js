import React from "react";

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