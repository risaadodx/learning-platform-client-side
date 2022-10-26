import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container className="mt-5">
        <Outlet></Outlet>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
