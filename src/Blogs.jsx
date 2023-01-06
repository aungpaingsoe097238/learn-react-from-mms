import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useGetBlogsQuery } from "./services/blogsApi";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  return (
    <div className=" container mx-auto ">
      <Link to="/create">
        <button className="btn-primary">create</button>
      </Link>

      {blogs?.map((blog) => (
        <Card key={blog.id} data={blog} />
      ))}
    </div>
  );
};

export default Blogs;
