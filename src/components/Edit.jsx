import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGetContact = async () => {
    const {data} = await axios.get(`http://localhost:3000/contacts/${id}`);
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data} = await axios.put(`http://localhost:3000/contacts/${id}`,{
      name: name,
      email: email,
      phone: phone
    })
    navigate('/')
  };

  useEffect(() => {
    handleGetContact();
  }, []);

  return (
    <div className=" flex items-center justify-center h-screen ">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            defaultValue={name}
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
            defaultValue={email}
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
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-3">
          <button className="btn-primary">Update</button>
          <Link to="/">
            <button className="btn-danger">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
