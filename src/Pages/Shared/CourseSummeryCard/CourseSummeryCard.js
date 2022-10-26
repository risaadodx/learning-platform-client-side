import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Image from "react-bootstrap/Image";

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
      <Card.Body className="px-5">
        <Card.Text className="text-end ">
          <FaStar className="text-warning me-2"></FaStar>
          {rating}
        </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length > 150 ? (
            <p>{details.slice(0, 150) + "..."}</p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
        <div className="d-flex align-items-center">
          <Image
            style={{ width: "50px" }}
            variant="top"
            roundedCircle
            src={author.img}
          ></Image>
          <h5 className="ms-3">{author.name}</h5>
        </div>
        <div className="mt-4">
          <Link to={`/course/${_id}`}>
            <Button variant="primary">Know Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseSummeryCard;
