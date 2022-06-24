import { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

class Mynavbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Les Pépites de Lily</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
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