import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();

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
    <div>
      <div className="d-flex justify-content-end mb-4">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Download Pdf</Button>}
        </Pdf>
      </div>
      <Card ref={ref}>
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
          <Link className="d-flex justify-content-end mb-4" to="/checkout">
            <Button>Get Premium Access</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
