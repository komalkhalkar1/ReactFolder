import React, { Component } from 'react'

 class EventBinding extends Component {
constructor(props) {
  super(props)

  this.state =({
    msg:"Hello"
  })
 
}
clickhandler(){
    this.setState({
        msg:"This is First way"
    } )
}

  render() {
    return (
      <>
      <div>
        {this.state.msg}
      </div>
      <button onClick={()=>this.clickhandler()}>Click Me</button>
      </>
    )
  }
}

export default EventBinding
