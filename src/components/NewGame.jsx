import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const NewGame = () => {
  return(
    <Container fluid>
      <h1>New Game</h1>
      <Container fluid="md">
        <Form>
          <Form.Group>
            <Form.Label>Location (ZIP Code):</Form.Label>
            <Form.Control type="text" placeholder="20009" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time:</Form.Label>
            <Form.Control type="text" placeholder=" date time here" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Result:</Form.Label>
            <Form.Control type="text" placeholder="6 - 2" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sport:</Form.Label>
            <Form.Control type="text" placeholder="Basketball" />
          </Form.Group>
          <Button variant="primary" type="submit">Create</Button>
        </Form>
      </Container>
    </Container>
  )
}

export default NewGame
