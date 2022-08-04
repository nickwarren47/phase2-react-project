import React from "react";

function Search({ onChange }) {
;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={onChange}
      />
      <button type="submit">🔑</button>
    </form>
  );
}

export default Search;