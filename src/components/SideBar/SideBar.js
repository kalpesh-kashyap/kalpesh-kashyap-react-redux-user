import React from "react";
import {Card, ListGroup} from "react-bootstrap";

const SideBar = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default SideBar;
