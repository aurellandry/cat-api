import React from 'react';

import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';


export default function Navigation() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">CatApi</Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#features">Favoris</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}