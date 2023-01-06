import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation
} from "./services/blogsApi";

const EditBlog = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [updateBlog] = useUpdateBlogMutation(id);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const editBlog = { id, title, description };
    updateBlog(editBlog);
    navigate("/");
  };

  useEffect(() => {
    setTitle(blog?.title);
    setDescription(blog?.description);
  }, [blog]);

  return (
    <div className="w-1/2 mx-auto mt-3">
      <div className="my-3">Edit A Blog</div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="input"
          placeholder="Enter Title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          cols="30"
          rows="10"
          className="input"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        ></textarea>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EditBlog;
