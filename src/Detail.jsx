import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "./services/blogsApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  return (
    <div>
      {blog?.id} -{blog?.title} -{blog?.description}
      <Link to="/">
        <button className="btn-primary">Back To Home</button>
      </Link>
      <Link to={`/edit/${id}`}>
        <button className="btn-primary">Edit Blog</button>
      </Link>
    </div>
  );
};

export default Detail;
