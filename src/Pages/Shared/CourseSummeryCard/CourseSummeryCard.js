import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";

const CourseSummeryCard = ({ course }) => {
  const {
    _id,
    rating,
    count,
    badge,
    duration,
    title,
    details,
    thumbnail_url,
    author,
  } = course;
  return (
    <Col>
      <Card className=" shadow  ">
        <Card.Img
          style={{ height: "260px" }}
          variant="top"
          src={thumbnail_url}
        />
        <Card.Body className="px-4 ">
          <Card.Text className="d-flex justify-content-between  ">
            <div className=" border border-2 rounded-pill px-4">
              <span className="fw-bold">{duration} hour</span>
            </div>
            <div className="d-flex align-items-center">
              <FaStar className="text-warning me-2"></FaStar>
              <span className="fw-bold">{rating}</span>
              <span className="ms-2 ">({count})</span>
            </div>
          </Card.Text>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>
            {details.length > 150 ? (
              <p>{details.slice(0, 150) + "..."}</p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
          <div className="d-flex align-items-center">
            <Image
              style={{ width: "40px" }}
              variant="top"
              roundedCircle
              src={author.img}
            ></Image>
            <span className="ms-3 fw-bold">{author.name}</span>
          </div>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <Link to={`/course/${_id}`}>
              <Button variant="primary">Know Details</Button>
            </Link>
            <div className=" border border-2 rounded-pill px-4 py-2">
              <span className="fw-bold">{badge}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseSummeryCard;
