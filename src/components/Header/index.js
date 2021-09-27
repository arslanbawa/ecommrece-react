import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import allActions from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

export default function Header()
  { 
  const {cartProducts} = useSelector(state=>state.cartData);
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  console.log(currentUser)
    return (        
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className={styles.headerBar}>
                <Container>
                <Navbar.Brand><Link className={styles.navLinks} to="/">Ecommerce Store</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link><Link className={styles.navLinks} to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link className={styles.navLinks} to="/Collections?id=men%27s%20clothing"> Men's Clothing</Link></Nav.Link>
                    <Nav.Link><Link className={styles.navLinks} to="/Collections?id=women%27s%20clothing"> Women's Clothing</Link></Nav.Link>
                    <Nav.Link><Link className={styles.navLinks} to="/Collections?id=electronics"> Electronics</Link></Nav.Link>
                    <Nav.Link><Link className={styles.navLinks} to="/Collections?id=jewelery"> Jewelery</Link></Nav.Link>
                  </Nav>
                  <Nav>
                    {currentUser.loggedIn?<>
                   <Nav.Link onClick={()=>{dispatch(allActions.userActions.logOut());window.location.reload(true);}}>Log Out {currentUser.user}</Nav.Link>
                    <Nav.Link><Link to="/cart"> <i class="fas fa-shopping-cart"></i></Link>{cartProducts.length}</Nav.Link> 
                    </>:<></>}
                    </Nav>
                  {/* ..........Search Todo......... */}
                </Navbar.Collapse>
                </Container>
              </Navbar>
       )
}
