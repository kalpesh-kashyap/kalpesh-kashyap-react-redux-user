import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {prop} from 'ramda';
import * as actions from '../../store/actions/users'

const SideBar = () => {
    const {users = []} = useSelector(prop('users'));
    const dispatch = useDispatch();

    const getUserHandler = (user) => {
        dispatch(actions.getUserDetails(user))
    }

    return (
        <Card>
            <ListGroup variant="flush">
                {
                    users.map(user => <ListGroup.Item
                        key={user.id}
                        onClick={() => getUserHandler(user)}>
                        {user.name}
                    </ListGroup.Item>)
                }
            </ListGroup>
        </Card>
    )
}

export default SideBar;
