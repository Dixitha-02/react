import React, { useRef } from 'react'

function ActionButton() {
    const buttonRef = useRef('hi')
    const action = ()=>{
        return <p>hello</p>
    }
    
    return (
        <>
        <input type='text' ref={buttonRef}></input>
      <button onClick={action}>  button</button>
      </>
    )
  }

export default ActionButton;
