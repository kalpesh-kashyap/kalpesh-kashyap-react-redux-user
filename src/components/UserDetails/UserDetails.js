import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import {prop} from 'ramda';
import * as action from '../../store/actions/users'

const UserDetails = () => {
    const dispatch = useDispatch();
    const {name, email, phone, address, id} = useSelector(prop('userDetails'));
    const {timer, setTimer} = useState(20);
    const deleteHandler = () => {
        dispatch(action.deleteUser(id))
    }

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{phone}</Card.Text>
                <Card.Text>{Object.values(address).join(',')}</Card.Text>
                <Button variant="primary" onClick={deleteHandler}>Delete User</Button>
            </Card.Body>
        </Card>
    )
}

export default UserDetails;