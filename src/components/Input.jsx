import { useState } from 'react'

const Input = () => {

    const [text,setText] = useState("");

    const handleClick = () => {
        console.log(text)
    }

    const handleChange = (e) => { 
        setText(e.target.value);
    }

  return (
    <div>
        <input type="text" value={text}  onChange={handleChange} />
        <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default Input