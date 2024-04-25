import React, { Component } from 'react'

 class ClassEvent extends Component {

    ClickHandler(){
        console.log("This is event class");
    }
  render() {
    return (
        <>
      <div>
        This is Event Handling using class component
      </div>
      <button onClick={this.ClickHandler}>Click Me</button>
      </>
    )
  }
}

export default ClassEvent
