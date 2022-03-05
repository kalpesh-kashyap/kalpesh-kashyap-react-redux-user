import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from "./components/TopNavigations/TopNavigation";
import {Row, Col} from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar";
import UserDetails from "./components/UserDetails/UserDetails";

const App = () => {
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
                <UserDetails/>
            </Col>
        </Row>
    </>
  );
};

export default App;
