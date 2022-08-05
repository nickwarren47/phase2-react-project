import React from "react"
import { Card } from "semantic-ui-react";
import MacCard from "./MacCard"

function MacListings({macsArray, handleSearchChange, searchState}) {
    console.log(macsArray)

    return(
        <> 
        <img src="https://user-images.githubusercontent.com/106715328/183108857-3872921b-5369-4078-aec5-4ba7a3223f87.png" alt="mac logo" className="macos-identifier"/>
        <Card.Group itemsPerRow={6}>
            {macsArray.map((mac) => (
            <MacCard mac={mac} handleSearchChange={handleSearchChange} searchState={searchState}/>))}
        </Card.Group>
        </>
    )
    
}

export default MacListings;