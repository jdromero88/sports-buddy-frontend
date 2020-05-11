import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ProfileEdit = () => {
 return(
   <Container fluid>
     <h1>Edit Profile:</h1>
     <Container fluid="md">
       <Form>
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>First Name:</Form.Label>
           <Form.Control type="text" placeholder="Jane" />
         </Form.Group>
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Last Name:</Form.Label>
           <Form.Control type="text" placeholder="Doe" />
         </Form.Group>
         <Form.Group controlId="exampleForm.ControlInput1">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="name@example.com" />
         </Form.Group>
         <Form.Group>
           <Form.Label>Username</Form.Label>
           <Form.Control type="text" placeholder="Username" />
         </Form.Group>
         <Form.Group controlId="formGroupPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group>
           <Form.Label>Location(ZIP Code)</Form.Label>
           <Form.Control type="text" placeholder="20009"/>
         </Form.Group>
         <Form.Group>
           <Form.Label>Avatar</Form.Label>
           <Form.Control type="text" placeholder="https://example.com/image.jpg" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Update
         </Button>
       </Form>
     </Container>
   </Container>
 )
}

export default ProfileEdit
