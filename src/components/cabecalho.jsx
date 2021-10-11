import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";



function Cabecalho() {
    return (
        <Navbar bg="light" expand="lg" className="sticky-top">
            <Container>
                <Navbar.Brand>Desafio FullStack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/desafio1">Desafio 1</Nav.Link>
                        <Nav.Link href="/desafio2">Desafio 2</Nav.Link>
                        <Nav.Link href="/desafio3">Desafio 3</Nav.Link>
                        <Nav.Link href="/desafio4">Desafio 4</Nav.Link>                                                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Cabecalho