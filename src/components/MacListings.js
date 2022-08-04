import React from "react"
import { Card } from "semantic-ui-react";
import MacCard from "./MacCard"

function MacListings({macsArray}) {
    console.log(macsArray)
    // const macsArrayParsed = macsArray.filter((mac) => 
    //     mac.action.toLowerCase().includes(parseArray.toLowerCase()))

    return(
        <Card.Group itemsPerRow={4}>
            {macsArray.map((mac) => (
            <MacCard mac={mac}/>))}
        </Card.Group>
    )
    
}

export default MacListings;