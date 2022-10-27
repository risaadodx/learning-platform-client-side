import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-risaadodx.vercel.app/courses-categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className=" border rounded px-3 shadow">
      <h3 className="text-center mb-5 mt-2 border rounded-pill py-2">
        Categories
      </h3>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
