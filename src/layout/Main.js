import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Outlet></Outlet>
          </Col>
          <Col>
            <h2>Sidebar</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
