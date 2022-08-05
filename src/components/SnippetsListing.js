import React from "react"
import { Card } from "semantic-ui-react";
import SnippetsCard from "./SnippetsCard"

function SnippetsListing({snippets}) {
    return (
        <>
        <img src="https://user-images.githubusercontent.com/106715328/183111625-1be41747-e763-4c31-a21e-1453c0465209.png" alt="snippets logo" className="snippets-identifier"/>
        <Card.Group itemsPerRow={4}>
            {snippets.map((snippet) => (
            <SnippetsCard snippet={snippet}/>))}
        </Card.Group> 
        </> 
    )
}

export default SnippetsListing;

