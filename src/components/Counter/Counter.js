import React, { useState } from 'react'

import "./Counter.css"

const Counter = ({initialCount = 0}) => {

const [count,setCount] = useState(initialCount)

function Increment(){
setCount(count+1)
}

function Decrement(){
setCount(count -1)
}

function SignChange(){
setCount(count * -1)
}

function Reset(){
setCount(0)
}


  return (
    <div className='counter'>
        <h1 data-testid="count">{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={SignChange}>Switch Signs</button>
        <button onClick={Reset}>Reset</button>

    </div>
  )
}

export default Counter