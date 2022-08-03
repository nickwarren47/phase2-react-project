import React from 'react'
import { Card } from 'semantic-ui-react'

function Snippets({ snippet }) {
    console.log(snippet)
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
    </Card.Content>
  </Card>
  )
}

export default Snippets