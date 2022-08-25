import React, { useState } from 'react'

const Clicker = () => {
  const [count, setCount] = useState();
  return (
    <div className="counter">
      { count } | Clicker
    </div>
    )
}

export default Clicker