import React, { useState } from 'react'

const Clicker = () => {
  const [count, setCount] = useState();
  const add = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter" onClick={add}>
      { count } | Clicker
    </div>
    )
}

export default Clicker