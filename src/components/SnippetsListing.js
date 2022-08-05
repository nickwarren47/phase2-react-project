import React from "react"
import { Card } from "semantic-ui-react";
import SnippetsCard from "./SnippetsCard"

function SnippetsListing({snippets}) {
    return (
        <>
        <Card.Group itemsPerRow={4}>
            {snippets.map((snippet) => (
            <SnippetsCard snippet={snippet}/>))}
        </Card.Group> 
        </> 
    )
}

export default SnippetsListing;

