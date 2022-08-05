import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function Snippets({ snippet }) {

    return (
    <Card className="Card">
    <Card.Content>
      <Card.Header>{snippet.prefix}</Card.Header>
      <Card.Meta>
        <span className='category'>
          category:
        </span>
      </Card.Meta>
      <Card.Description>
        Action: {snippet.action}
      </Card.Description>
      <a href={snippet.Source}>
        <Button size="mini">Source</Button>
      </a>
    </Card.Content>
  </Card>
  )
}

export default Snippets