import { useRef } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const inputRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    if(inputRef.current.value){
      onSubmit(inputRef.current.value);
      inputRef.current.value = '';
    }
  };
  return (
    <form className="form">
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>ADD</button>
    </form>
  );
};

export default Form;
