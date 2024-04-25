import React from 'react'

function ArrayD() {

    const colors=['red','green','blue'];

    const [firstColor,secoundColor,thirdColor]=colors
  return (
  <>
  <div>
    <div>This is Array Destructing in functional based component</div>
    </div>
    <h1>my firstColor is:{firstColor}</h1>
    <h1>secoundColor:{secoundColor}</h1>
    <h1>thirdColor:{thirdColor}</h1>
  
  
  </>
      
    
  )
}

export default ArrayD
