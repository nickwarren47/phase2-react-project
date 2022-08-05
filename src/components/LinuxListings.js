import React from 'react'
import { Card } from 'semantic-ui-react'
import LinuxCard from "./LinuxCard"

function LinuxListings({linuxArray}) {

    return (
        <>
        <img src="https://user-images.githubusercontent.com/106715328/183110184-1cdf4d11-776e-40a3-bd43-d0f714ee7064.png" alt="linux logo" className="linux-identifier"/>
        <Card.Group itemsPerRow={6} className="word-break">
            {linuxArray.map((linux) => (
            <LinuxCard linux={linux}/>))} 
        </Card.Group>  
        </>
    )
}

export default LinuxListings;


