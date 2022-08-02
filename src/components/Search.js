import React from "react";

function Search({handleSearchQuery}) {

  return (
      <div className="ui icon input">
        <input className="prompt" placeholder="Search action here" onChange={handleSearchQuery}/>
         <i className="search icon" />
      </div>
  );
}

export default Search;
