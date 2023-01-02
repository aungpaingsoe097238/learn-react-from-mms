import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const { data } = await axios.get("http://localhost:3000/contacts");
    setContacts(data);
  };

  const handleContactDelete = async (id) => {
    const { data } = await axios.delete(`http://localhost:3000/contacts/${id}`);
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <Link to="/create">
        <button type="button" className="btn-primary">
          New Contact
        </button>
      </Link>

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Phone
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact) => (
              <tr
                key={contact.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th className="py-4 px-6">{contact.name}</th>
                <td className="py-4 px-6">{contact.email}</td>
                <td className="py-4 px-6">{contact.phone}</td>
                <td className="py-4 px-6 flex gap-3">
                  <Link to={`edit/${contact.id}`}>
                    <AiFillEdit className=" text-xl cursor-pointer" />
                  </Link>

                  <AiFillDelete
                    className=" text-xl cursor-pointer"
                    onClick={() => handleContactDelete(contact.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contacts;
