import React, { Component } from 'react'
import './Square.css'


class Square extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="square">{ this.props.value }</div>
      </React.Fragment>
    )
  }
}
export default Square
