import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCard from "../Shared/CourseSummeryCard/CourseSummeryCard";

const Home = () => {
  const AllCourse = useLoaderData();
  return (
    <Row md={2} className="g-4">
      {AllCourse.map((course) => (
        <CourseSummeryCard key={course._id} course={course}></CourseSummeryCard>
      ))}
    </Row>
  );
};

export default Home;
