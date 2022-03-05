import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from "./components/TopNavigations/TopNavigation";
import {Row, Col} from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar";
import UserDetails from "./components/UserDetails/UserDetails";
import {useSelector} from 'react-redux';
import {prop} from 'ramda';

const App = () => {
    const selectedUser = useSelector(prop('userDetails'));
    console.log(selectedUser)
  return (
    <>
        <Row>
            <Col>
                <TopNavigation/>
            </Col>
        </Row>
        <Row>
            <Col xs="5">
                <SideBar/>
            </Col>
            <Col xs="7">
                {!!selectedUser && <UserDetails/>}
            </Col>
        </Row>
    </>
  );
};

export default App;
