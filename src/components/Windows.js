import React from 'react'
import { Card } from 'semantic-ui-react'

function Windows({ window }) {
    const {
        keyStroke, 
        action, 
        // worksIn, 
        category
    } = window
      
  return (
  <Card>
    <Card.Content>
      <Card.Header>{keyStroke}</Card.Header>
      <Card.Meta>
        <span className='category'>
          category: {category}
        </span>
      </Card.Meta>
      <Card.Description>
        Action: {action}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default Windows