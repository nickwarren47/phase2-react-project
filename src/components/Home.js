import React from 'react'
import { Card, Image, Segment, Grid} from 'semantic-ui-react'

function Home() {
  return (
    <div className='homeCard'>
      <h1 id="welcome-to">Welcome to Coder's Keys!</h1>
      <Image src='https://user-images.githubusercontent.com/106715328/182723100-5c4e44b5-2df1-4c6f-b918-3c7d485d998b.png' size='medium' circular centered/>
      <h2 id="mission-statement">Coder's Keys Mission Statement</h2>
      <h3 id="mission">At Coder's Keys, we are committed to providing coders with the 
        ability to produce superior code with no hastle. The best thing to do 
        that? Using shortcut keys of course! Every coder has their favorite 
        shortcuts (or "hot keys") to make accelerate their coding. These lists
        of code will provide easy access to these keys and will hopefully help you
        to rock your coding!
      </h3>
      <Image.Group size='tiny' spaced='left'>
        <Image src="https://user-images.githubusercontent.com/106715328/182726403-7a5235eb-4c79-462b-9a8b-41937ceb8b44.png"/>
        <Image src="https://user-images.githubusercontent.com/106715328/182726762-fc7f8bbe-0314-4363-ba50-a1cd6eea2b07.png" />
        <Image src="https://user-images.githubusercontent.com/106715328/182726829-d3edaa45-864f-4a78-901d-fc8425231f53.png" />
        <Image src="https://user-images.githubusercontent.com/106715328/182726881-39f15c62-d31c-4ab7-871a-fab89dcb3623.png" />
      </Image.Group>
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment raised>Our Content Available for MacOS, Windows, Linux, and VS Code</Segment>
        </Grid.Column>
        <br />
      </Grid>
      <div id="developer-cards">
        <h1 id="meet-developers">Meet Our Developers:</h1>
        <Card.Group itemsPerRow={3}>
        <Card>
          <Image src='https://user-images.githubusercontent.com/106715328/182720638-15ccb5f3-43b8-4b32-bcd5-ded38c0cc6f7.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Cesar Tidrick</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Cesar is an avid software engineer from Longmont, Colorado.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://user-images.githubusercontent.com/106715328/182722306-9db5644f-cc53-42b1-a5f7-9915756ae7f8.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Zion Miller</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Zion is an avid software engineer from Los Angeles, California.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://user-images.githubusercontent.com/106715328/182721332-d0310aca-de07-48c8-9408-f8add1acad05.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nick Warren</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Nick is an avid software engineer from Denver, Colorado.
            </Card.Description>
          </Card.Content>
        </Card>
        </Card.Group>
      </div>
    </div>
  )
}

export default Home