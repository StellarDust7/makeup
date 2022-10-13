import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Text} from "../Text/Text";
import "./nav.css";
import { Link } from "react-router-dom";


const NavScrollExample = () => {
    return (
        <>
        <Text/>
        <Navbar expand="xl" className="na">
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0 ac"
                style={{ maxHeight: "100px" }}
                navbarScroll
            >
                <Nav.Link className="lin sp" as={Link} to="/" >Home</Nav.Link>
                <Nav.Link className="lin" as={Link} to="eyeshadow" >Eyeshadow</Nav.Link>
                <Nav.Link className="lin" as={Link} to="lipstick" >Lipstick</Nav.Link>
                <Nav.Link className="lin" as={Link} to="foundation" >Foundation</Nav.Link>
                <Nav.Link className="lin" as={Link} to="search" >Search</Nav.Link>
                
            </Nav> 
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </>
    );
}

export {NavScrollExample};
