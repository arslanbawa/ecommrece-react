import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import styles from '../Footer/Footer.module.css'
import {Link} from 'react-router-dom'
export default function index() {

    return (
            
              <div className={styles.footerNav}>
                    <Container>
                        <Nav defaultActiveKey="/home" className=""> 
                            <Nav className="me-auto">
                                <Nav.Link><Link className={styles.navLinks} to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link className={styles.navLinks} to="/Collections?id=men%27s%20clothing"> Men Cloth</Link></Nav.Link>
                                <Nav.Link><Link className={styles.navLinks} to="/Collections?id=women%27s%20clothing"> Women Cloth</Link></Nav.Link>
                                <Nav.Link><Link className={styles.navLinks} to="/Collections?id=electronics"> Electronics</Link></Nav.Link>
                                <Nav.Link><Link className={styles.navLinks} to="/Collections?id=jewelery"> Jewelery</Link></Nav.Link>
                            </Nav>
                        </Nav>
                    </Container>
               </div>
            
    )
}
