import React, { Component } from 'react'

import propTypes from "prop-types";

 class props_types extends Component {
  render() {
const {boolean}=this.props;


    return (
      <div>
        {/* <p>My name is:{myName}</p> */}
        {/* <p>My age is:{myNumber}</p> */}
    {/* <p>Array is:{value}</p> */}
    {/* <p>Enter any data:{any11}</p> */}
    <p>I am:{boolean}</p>

    
      </div>
    )
  }
}
props_types.propTypes={

    // myName:propTypes.string.isRequired,
    // myNumber:propTypes.number.isRequired,
    // value:propTypes.array.isRequired,
  //  any11:propTypes.any.isRequired
  boolean:propTypes.bool.isRequired
};

export default props_types
