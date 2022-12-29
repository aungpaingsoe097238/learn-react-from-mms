import { useState } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";
import { v4 as id } from 'uuid'

const App = () => {
  const [initialState, setInitialState] = useState([]);
  const handleClick = (text) => {
    const data = {};
    data.text = text;
    data.id = id()
    data.isDone = false;
    setInitialState([...initialState, data]);
  };
  const handleCheck = (id) => { 
    setInitialState(initialState.map( i => i.id === id ? {text: i.text, isDone : !i.isDone , id: id } : i))
  };
  const handleDelete = (id) => {
    setInitialState(initialState.filter( i => i.id !== id ))
  }
  const handleEdit = (id) => {
    const oldData = initialState.find( i => i.id === id)
    const value = prompt('Enter new value',oldData.text)
    if(value){
      setInitialState(initialState.map( i => i.id === id ? {text: value, isDone : false , id: id } : i))
    }
  }
  return (
    <div>
      <Form onSubmit={handleClick} />
      {initialState.map((i) => (
        <List 
        key={i.id} 
        data={i.text} 
        id={i.id} 
        isDone={i.isDone} 
        onChecked={handleCheck} 
        onDeleted={handleDelete}
        onEdited={handleEdit}
        />
      ))}
    </div>
  );
};

export default App;
