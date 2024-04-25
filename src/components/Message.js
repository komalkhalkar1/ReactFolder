import React, { Component } from 'react'

 class Message extends Component {
  render() {
   const{name,courseName}= this.props
    return (
      <div>
        This class component

        <h2>Hello my name is {name} , and my skill is {courseName} </h2>
      </div>
    )
  }
}

export default Message
