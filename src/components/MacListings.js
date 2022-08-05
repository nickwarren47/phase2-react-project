import React from "react"
import { Card } from "semantic-ui-react";
import MacCard from "./MacCard"

function MacListings({macsArray, handleSearchChange, searchState}) {
    console.log(macsArray)
    // const macsArrayParsed = macsArray.filter((mac) => 
    //     mac.action.toLowerCase().includes(parseArray.toLowerCase()))

    return(
        <> 
        <h1 id="macos-identifier">MacOS</h1>
        <Card.Group itemsPerRow={6}>
            {macsArray.map((mac) => (
            <MacCard mac={mac} handleSearchChange={handleSearchChange} searchState={searchState}/>))}
        </Card.Group>
        </>
    )
    
}

export default MacListings;