import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import styles from '../Footer/Footer.module.css'
export default function index() {
    return (
        <div>
            <Container>
              <div className={styles.footerNav}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link eventKey="link-1">Products</Nav.Link>
                        <Nav.Link eventKey="link-2">Collections</Nav.Link>
                        <Nav.Link eventKey="link-3">
                            About us
                        </Nav.Link>
                </Nav>
                <Nav defaultActiveKey="/home" className="flex-column">
                    
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link eventKey="link-1">Products</Nav.Link>
                    <Nav.Link eventKey="link-2">Collections</Nav.Link>
                    <Nav.Link eventKey="link-3" >
                        About us
                    </Nav.Link>
                    </Nav>
                    <Nav defaultActiveKey="/home" className="flex-column">
                            
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link eventKey="link-1">Products</Nav.Link>
                            <Nav.Link eventKey="link-2">Collections</Nav.Link>
                            <Nav.Link eventKey="link-3" >
                                About us
                            </Nav.Link>
                    </Nav>
                    <Nav defaultActiveKey="/home" className="flex-column">
                            
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link eventKey="link-1">Products</Nav.Link>
                            <Nav.Link eventKey="link-2">Collections</Nav.Link>
                            <Nav.Link eventKey="link-3" >
                                About us
                            </Nav.Link>
                    </Nav>
               </div>
            </Container>
        </div>
    )
}
