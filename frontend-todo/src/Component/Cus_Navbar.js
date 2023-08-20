import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/brand-logo.png'

function Cus_Navbar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt='Brand-image' className='nav-logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
                        <Nav className="Link">
                            <Nav.Link href="/TodoList" style={{padding:'1.2rem'}}>Todo List</Nav.Link>
                            <Nav.Link href="/CreateTodo" style={{padding:'1.2rem'}}>CreateTodo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Cus_Navbar;