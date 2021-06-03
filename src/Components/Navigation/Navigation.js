import React from 'react';

import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';


export default function Navigation() {
    return (
        <div style={{marginBottom: "60px"}}>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">CatApi</Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="#favoris">Favoris</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
                    <Button variant="outline-light">Recherche</Button>
                </Form>
            </Navbar>
        </div>
    );
}