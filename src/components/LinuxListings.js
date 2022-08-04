import React from 'react'
import { Card } from 'semantic-ui-react'
import LinuxCard from "./LinuxCard"

function LinuxListings({linuxArray}) {

    return (
        <Card.Group itemsPerRow={4}>
            {linuxArray.map((linux) => (
            <LinuxCard linux={linux}/>))} 
        </Card.Group>   
    )
}

export default LinuxListings;


