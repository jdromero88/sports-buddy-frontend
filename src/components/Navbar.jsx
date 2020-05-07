import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
const Menu = () => {
  return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Sports Buddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sports">Sports</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Menu
