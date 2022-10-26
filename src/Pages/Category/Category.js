import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCard from "../Shared/CourseSummeryCard/CourseSummeryCard";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Category = () => {
  const categoryCourse = useLoaderData();
  return (
    <Row>
      <Col lg="9">
        <Row md={2} className="g-4">
          {categoryCourse.map((course) => (
            <CourseSummeryCard course={course}></CourseSummeryCard>
          ))}
        </Row>
      </Col>
      <Col lg="3">
        <Sidebar></Sidebar>
      </Col>
    </Row>
  );
};

export default Category;
