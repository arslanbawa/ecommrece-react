import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default function Header() {
    return (    <>
 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <NavDropdown title="Shop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Men Clothing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Jewelry</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#About-us">About us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i class="fas fa-shopping-cart"></i></Nav.Link>
    </Nav>
    {/* ..........Search Todo......... */}
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}
