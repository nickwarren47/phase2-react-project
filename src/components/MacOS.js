import React from 'react'
import { Card, Grid, Search } from 'semantic-ui-react'

function MacOS({ mac }) {
    const {
        keyStroke, 
        action, 
        // worksIn, 
        category
    } = mac
      
  return (
      <div>
      <Card className="ui grid container">
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
      </div>
  )
}

export default MacOS;