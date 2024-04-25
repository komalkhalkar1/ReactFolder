import React from 'react'

function EventClick() {

    function Clickhandler(){
        console.log("user click on button");
    }
    
  return (
    <>
    <div>
      EventClick
    </div>
    <button onClick={Clickhandler}>Click Me</button>
    </>
  )
}

export default EventClick
