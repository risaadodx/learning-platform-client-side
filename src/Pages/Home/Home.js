import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummeryCard from "../Shared/CourseSummeryCard/CourseSummeryCard";

const Home = () => {
  const AllCourse = useLoaderData();
  return (
    <div>
      <h1>All news:{AllCourse.length}</h1>
      {AllCourse.map((course) => (
        <CourseSummeryCard key={course._id} course={course}></CourseSummeryCard>
      ))}
    </div>
  );
};

export default Home;
