mport React, { Component } from 'react'
import './Square.css'
class Square extends Component{

  // findStuff = () => {
  //   if (this.state.squares === this.state.bomb){
  //     alert (" BOMB")
  //   }else if( this.state.squares === this.state.treasure ){
  //    alert ("winnnah")
  //   }
  //  }
  render(){
    return(
      <React.Fragment>
        <div id="square" >{ this.props.value }</div>
      </React.Fragment>
    )
  }
}
export default Square
