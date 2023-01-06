import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "./services/blogsApi";

const Card = ({ data }) => {
  const { id, title, description } = data;
  const [deleteBlog] = useDeleteBlogMutation()
  return (
    <div className=" container mx-auto py-3 px-5 ">
      <div>
        {id}- {title} - {description}
      </div>
      <Link to={ `/detail/${id}` }>
        <button className="btn-primary">Detail</button>
      </Link>
      <button className="btn-danger" onClick={ () => deleteBlog(id) }>Delete</button>
      <hr />
    </div>
  );
};

export default Card;
