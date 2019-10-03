import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img src={require('./../../assets/images/logo/logo.png')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav">
                        <Nav.Link href="#home" style={{color:'#000000'}}>Home</Nav.Link>
                        <Nav.Link href="#about" style={{color:'#000000'}}>About</Nav.Link>
                        <Nav.Link href="#service" style={{color:'#000000'}}>Service</Nav.Link>
                        <Nav.Link href="#gallery" style={{color:'#000000'}}>Gallery</Nav.Link>
                        <Nav.Link href="#pricing" style={{color:'#000000'}}>Pricing</Nav.Link>
                        <Nav.Link href="#blog" style={{color:'#000000'}}>Blog Section</Nav.Link>
                        <Nav.Link href="#testimonial" style={{color:'#000000'}}>Testimonial</Nav.Link>
                        <Nav.Link href="#contact" style={{color:'#000000'}}>Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}