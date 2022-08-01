import React from "react";

function Search({handleSearchQuery}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchQuery}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
