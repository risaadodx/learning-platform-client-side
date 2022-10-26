import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseSummeryCard = ({ course }) => {
  const {
    _id,
    rating,
    badge,
    duration,
    title,
    details,
    thumbnail_url,
    author,
    image_url,
    requirements,
  } = course;
  return (
    <Card>
      <Card.Img variant="top" src={thumbnail_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 150 ? (
            <p>{details.slice(0, 150) + "..."}</p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
        <Link to={`/course/${_id}`}>
          <Button variant="primary">Know Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CourseSummeryCard;
