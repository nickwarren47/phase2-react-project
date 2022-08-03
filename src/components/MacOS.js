import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

function MacOS({ mac }) {
    const {
        keyStroke, 
        action, 
        // worksIn, 
        category
    } = mac
      
  return (

<Grid columns={3} divided>
  <Grid.Row>
    <Grid.Column>
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
    </Grid.Column>
  </Grid.Row>
</Grid> 
  )
}

export default MacOS;