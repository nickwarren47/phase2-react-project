import React from 'react'
import { Card } from 'semantic-ui-react'
import LinuxCard from "./LinuxCard"

function LinuxListings({linuxArray}) {

    return (
        <Card.Group itemsPerRow={6} className="word-break">
            {linuxArray.map((linux) => (
            <LinuxCard linux={linux}/>))} 
        </Card.Group>   
    )
}

export default LinuxListings;


