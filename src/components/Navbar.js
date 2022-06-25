import { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

class Mynavbar extends Component {
    render() {
        return (
            <>
                <Navbar variant="light" fixed="top" collapseOnSelect expand="lg" className="color-Navbar">
                    <Container>
                        <Navbar.Brand href="#home" id="logo">Les Pépites de Lily</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                            <Nav className="fs-4">
                                <Nav.Item className="mx-3">
                                    <Nav.Link href="#home">Acceuil</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mx-3">
                                    <Nav.Link href="#features">Anniversaire</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mx-3">
                                    <Nav.Link href="#pricing">Salés</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br />
            </>
        );
    }
}
export default Mynavbar;