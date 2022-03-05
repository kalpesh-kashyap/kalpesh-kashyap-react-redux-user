import React from 'react';
import {Navbar, Container, Button} from "react-bootstrap";

const TopNavigation = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Users</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="primary">Fetch Users</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavigation;