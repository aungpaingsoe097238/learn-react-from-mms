import { useState, memo } from "react";
import ConTwo from './ConTwo'
import "./ConOne.css";

const ConOne = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(pre => !pre)
  };
  return (
    <div>
      <h1 className={ toggle ? 'header' : 'changeHeader' }>Hello World</h1>
      {
        toggle && <ConTwo/>
      }
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default memo(ConOne);
