import React, { Component } from 'react'


class Square extends Component{

  render(){
    console.log(this.props.image)
    return(
      <React.Fragment>
        <div
           id="square"
           onClick= {() => this.props.handleClicked(this.props.index)}
        >
        { this.props.value }
        <div id="img"> <img src={this.props.image} style = {{"width":"99%"}}/></div>
        </div>
      </React.Fragment>
    )
  }
}
export default Square
