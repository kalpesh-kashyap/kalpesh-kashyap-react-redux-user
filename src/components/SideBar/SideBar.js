import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {prop} from 'ramda';

const SideBar = () => {
    const users = useSelector(prop('users'));
    return (
        <Card>
            <ListGroup variant="flush">
                {
                    users.map(user => <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>)
                }

            </ListGroup>
        </Card>
    )
}

export default SideBar;
