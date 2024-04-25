import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    return (
      <div>
        {/* <h2>This is welcome file</h2> */}
        This is Welcome class Component
        <h1>Hello , my name is {this.props.name} and i am from {this.props.city} </h1>
      </div>
    )
  }
}

export default Welcome
