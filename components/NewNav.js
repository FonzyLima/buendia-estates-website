import { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

       export default class NewNav extends Component {
       render() {
       return <div className="myContainer">
        
        <Navbar id="navbar" className="navbar navbar-expand-lg sticky-top" expand="lg">
        <Navbar.Brand href="/"><img className="navpicture" src="navlogo.png"/></Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler custom-toggler" aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                <Nav.Link className="nav-item" href="/">Home</Nav.Link>
                <Nav.Link href="/properties">Properties</Nav.Link>
                <Nav.Link href="/sellproperties">Sell a Property</Nav.Link>
                <Nav.Link href="/Booking">Book A Viewing</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>

  }
}