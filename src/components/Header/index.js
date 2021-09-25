import React from 'react'
import logos from "./fotlogo.png"
import styles from "../Header/Header.module.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default function Header() {
    return (    <>
 {/* <Navbar collapseOnSelect expand="lg" className={styles.navbg} >
  <Container>
  <Navbar.Brand href="#home">My Store<img src={logos}  className={styles.imglogo} /></Navbar.Brand>
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
      <Nav.Link href="#deets" className="text-warning"><i class="fas fa-shopping-cart"></i>(0)</Nav.Link>
    </Nav>
    {/* ..........Search Todo......... */}
  {/* </Navbar.Collapse>
  </Container>
</Navbar> */} 



  <div className={styles.navbar}>
    <div className={styles.header}>
      <ul className={styles.menu}>
        <li><img src={logos} className={styles.imglogo}/></li>
        <li> Home</li>
        <li>category</li>
        <li>About Us</li>
        
      </ul>
    </div>
  </div>
 
</>
    )
}
