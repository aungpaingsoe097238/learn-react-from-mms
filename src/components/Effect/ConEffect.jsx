import { useEffect , useState } from "react";

const ComEffect = () => {
  const [count,setCount] = useState(0);
  const [toggle,setToggle] = useState(true);
  // mounted
  useEffect(() => {
    console.log("mounted");
  },[])
  // didUpdate
  useEffect(() => {
    console.log("did Update");
  })
  // component will update when value changes
  useEffect(() => {
    console.log('value changed');
  },[toggle])
  const handleClick = () => {
    setCount( pre => pre + 1)
  }

  const handleToggle = () => {
    setToggle( pre => !pre) 
  }

  return <div>
    <p>{ count }</p>
    {
      toggle && <p>Hello Toggle</p>
    }
    <button onClick={handleClick}>Click</button>
    <button onClick={handleToggle}>Toggle</button>
  </div>;
};

export default ComEffect;
