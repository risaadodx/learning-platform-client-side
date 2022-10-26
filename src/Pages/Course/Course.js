import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const Course = () => {
  const course = useLoaderData();
  const {
    author,
    title,
    details,
    image_url,
    requirements,
    rating,
    count,
    duration,
  } = course;
  return (
    <Card>
      <Card.Img style={{ height: "550px" }} variant="top" src={image_url} />

      <Card.Body className="px-5">
        <div className="mt-4 mb-5">
          <img
            className="rounded-circle "
            style={{ width: "50px" }}
            src={author.img}
            alt=""
          />
          <span className="ms-2 fw-bold">{author.name}</span>
        </div>
        <Card.Title className="fs-2 fw-bold mb-5">{title}</Card.Title>
        <h3>About this course:</h3>
        <Card.Text>{details}</Card.Text>
        <h3>Requirments:</h3>
        <span>{requirements}</span>
        <div className="mt-5">
          <h4>Ratings:</h4>
          <span>
            <FaStar className="text-warning me-2"></FaStar>
            {rating} ({count})
          </span>
          <h5 className="mt-3">
            Course Duration: <span className="fs-5">{duration} hour</span>
          </h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Course;
