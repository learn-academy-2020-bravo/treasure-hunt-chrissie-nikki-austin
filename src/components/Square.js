import React, { Component } from 'react'

class Square extends Component{
  showIndex = () =>{
    alert (this.props.index)
  }
  render(){
    return(
      <React.Fragment>
        <div id="square"
            onClick ={this.showIndex}>{ this.props.value }</div>
      </React.Fragment>
    )
  }
}
export default Square
