import React from "react"
import { Card } from 'semantic-ui-react'
import WindowsCard from "./WindowsCard";

function WindowsListings({windowsArray}) {

    return (
    <>
    <img src="https://user-images.githubusercontent.com/106715328/183110951-199478cf-e660-4289-bc70-d47495d36eaf.png" alt="windows logo" className="windows-identifier"/>
    <Card.Group itemsPerRow={6}>
        {windowsArray.map((windows) => (
        <WindowsCard windows={windows}/>))}
    </Card.Group>
    </>
    )
}

export default WindowsListings;