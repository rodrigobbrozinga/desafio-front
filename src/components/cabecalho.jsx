import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";



function Cabecalho() {
    return (
        <Navbar bg="light" expand="lg" /* className="fixed-top" */>
            <Container>
                <Navbar.Brand href="#home">Desafio FullStack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Desafio 1</Nav.Link>
                        <Nav.Link href="#">Desafio 2</Nav.Link>
                        <Nav.Link href="#">Desafio 3</Nav.Link>
                        <Nav.Link href="#">Desafio 4</Nav.Link>                                                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Cabecalho