import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      bomb: "bomb",
      treausure: "treasure"
    }
  }



handleChange = (event) => {
  // a method that will take the value from an input and save it in the state key "name"
  this.setState({ squares: event.target.value })
}

 // findStuff = () => {
 //   if (this.state.squares === this.state.bomb){
 //     alert (" BOMB")
 //   }else if( this.state.squares === this.state.treasure ){
 //    alert ("winnnah")
 //   }
 //  }


//   randomTreasure = () => {
//   let setTreasure = Math.floor(Math.random()* this.state.squares.length )
//     this.setState({treasure:setTreasure})
//
//
//     }
//   randomBomb = () => {
//   let setBomb = Math.floor(Math.random()* this.state.squares.length )
//     this.setState({bomb:setBomb})
// }



  //if 1-7 = tree
  // if else
  // if else 8 = bomb
  // if else 9 = Treasure


  render(){
    let square = this.state.squares.map((value, index)=> {
      return(
        <Square
          value={ value }
          index={ index }
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div>
          { square }
        </div>

      </React.Fragment>
    )
  }
}

export default App
