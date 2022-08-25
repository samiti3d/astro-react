import React, { useState } from 'react'

const Clicker = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((i) => i + 1);
  }
  return (
    <>
    <h2>{ count }</h2>
    <button className="counter" onClick={add}>
      Clicker
    </button>
    </>

    )
}

export default Clicker