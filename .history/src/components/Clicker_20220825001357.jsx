import React, { useState } from 'react'

const Clicker = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }
  return (
    <>
    { count } 
    <button className="counter" onClick={add}>
      Clicker
    </button>
    </>

    )
}

export default Clicker