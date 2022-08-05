import React from "react"
import { Card } from 'semantic-ui-react'
import WindowsCard from "./WindowsCard";

function WindowsListings({windowsArray}) {

    return (
    <Card.Group itemsPerRow={6}>
        {windowsArray.map((windows) => (
        <WindowsCard windows={windows}/>))}
    </Card.Group>
    )
}

export default WindowsListings;