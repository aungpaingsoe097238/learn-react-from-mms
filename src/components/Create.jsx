import axios from "axios";
import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleCreateContact = async ( contact ) => {
    const { data } = await axios.post('http://localhost:3000/contacts',contact)
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email);
    handleCreateContact({
      id: Date.now(),
      name: name,
      email: email,
      phone: phone
    })
  };

  return (
    <div className=" flex items-center justify-center h-screen ">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-3">
          <button className="btn-primary">Create</button>
          <Link to="/">
            <button className="btn-danger">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
