import React, { useState } from 'react'

const Clicker = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }
  return (
    <button className="counter" onClick={add}>
      { count } | Clicker
    </button>
    )
}

export default Clicker