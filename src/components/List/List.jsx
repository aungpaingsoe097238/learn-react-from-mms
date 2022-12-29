import React from "react";
import "./List.css";
import { BsFillTrashFill } from "react-icons/bs"
import { BiEditAlt } from 'react-icons/bi'

const List = ({ id, data, isDone , onChecked , onDeleted ,onEdited }) => {

  const handleChange = () => {
    onChecked(id)
  }

  const handleDelete = () => {
    onDeleted(id)
  }

  const handleEdit = () => {
    onEdited(id)
  }

  return <div className={`list ${isDone && "done"}`}>
    <div>
    <input type="checkbox" checked={isDone} onChange={handleChange} />
      { data }
    </div>
    <div className="btn">
      <button onClick={handleEdit}>
        <BsFillTrashFill/>
      </button>
      <button onClick={handleDelete}>
        <BiEditAlt/>
      </button>
    </div>
    </div>;
};

export default List;
