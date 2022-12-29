import { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)    

  const handleAdd = () => setCount(pre => pre + 1);

  const handleRemove = () => setCount(pre => pre - 1);

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Counter