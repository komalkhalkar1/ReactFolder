import React from 'react'

function Greet(props) {
  return (
    <div>
      <h2>Hello my name is {props.name} and my skill is {props.skills}</h2>
      {props.children}

    </div>
  )
}

export default Greet

