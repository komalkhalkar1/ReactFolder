import React from 'react'

function EventObject() {

    const clickhandler=(a,b)=>{
        alert(b.type);
    }
  return (
    <>
    <div>
      EventObject
    </div>
    <button onMouseOut={(Event)=>clickhandler("Goal",Event)}>Take a shot</button>
    </>
  )
}

export default EventObject
