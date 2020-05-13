import React, { Component } from 'react'

class Square extends Component{

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick= {this.props.showIndex}>
        { this.props.value }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
