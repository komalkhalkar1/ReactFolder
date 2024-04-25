import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'
// import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     ParentName:"John"
  }
  this.prentOne=this.prentOne.bind(this)
}
prentOne(childdata){
    alert(`Hello ${this.state.ParentName}`)

    alert(`Hello ${this.state.ParentName} from ${childdata}`)
}


  render() {
    return (
        <>
      <div>
        this is ParentComponent
        {/* <ChildComponent /> */}
        {/* <ChildComponent Parenthandler={this.prentOne}/> */}
      </div>
      </>
    )
  }
}

export default ParentComponent
