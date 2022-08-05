import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function LinuxCard({ linux }) {
    const {keyStroke, action, category, source} = linux
      
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
      <a href={source}>
        <Button size="mini">Source</Button>
      </a>
    </Card.Content>
  </Card>
  )
}

export default LinuxCard;