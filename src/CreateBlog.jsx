import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBlogMutation } from "./services/blogsApi";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [addBlog] = useAddBlogMutation();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newBlog = { id: Date.now(), title, description };
    addBlog(newBlog);
    navigate('/')
  };
  return (
    <div className="w-1/2 mx-auto mt-3">
      <div className="my-3">Create A Blog</div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="input"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          cols="30"
          rows="10"
          className="input"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        ></textarea>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
