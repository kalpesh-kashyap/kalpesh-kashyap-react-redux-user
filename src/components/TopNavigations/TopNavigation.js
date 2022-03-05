import React from 'react';
import {Navbar, Container, Button} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {prop} from 'ramda';
import * as actions from '../../store/actions/users'

const TopNavigation = () => {
    const dispatch = useDispatch();
    const fetchUserHandler = () => {
        dispatch(actions.fetchUsers())
    }
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Users</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="primary" onClick={fetchUserHandler}>Fetch Users</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavigation;