import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav  from "react-bootstrap/Nav";
import Container  from "react-bootstrap/Container";
import Icon from "./CartWidget";


const NavbarE = (contador) => {
    return ( 
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav> 
              </Container>
              <div className="icon">
                < Icon />
              </div>
            </Navbar>
    )
}

export default NavbarE;