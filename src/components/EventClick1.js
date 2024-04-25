import React from 'react'

function EventClick1() {
    const clickhandler=(a)=>{
alert(a);
    }
  return (
    <>
    <div>
     Passing Argument in Event 
    </div>
    <button onClick={()=> clickhandler("Goal")}>Take a shot</button>
    </>
  )
}

export default EventClick1
