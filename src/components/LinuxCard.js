import React from 'react'
import { Card } from 'semantic-ui-react'

function LinuxCard({ linux }) {
    const {keyStroke, action, category} = linux
      
  return (
  <Card className="linux-card">
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

export default LinuxCard;