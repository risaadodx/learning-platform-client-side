import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCard from "../Shared/CourseSummeryCard/CourseSummeryCard";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <Row>
      <Col lg="9">
        <Row md={2} className="g-4">
          {courses.map((course) => (
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

export default Courses;
