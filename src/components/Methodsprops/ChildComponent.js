import React from 'react'

function ChildComponent() {
  return (
    <>
    <div>
      Child Component
    </div>
    {/* <button onClick={this.props.Parenthandler={this:prentOne}}>Click Me</button> */}

    <button onClick={this.props.Parenthandler('child')}>Click Me</button>
    </>
  )
}

export default ChildComponent
