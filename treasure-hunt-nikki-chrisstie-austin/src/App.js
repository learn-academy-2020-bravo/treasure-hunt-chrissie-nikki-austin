import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      bomb: "bomb",
      treausure: "treausre",
      tree: "tree"
    }
  }
  randomBomb = () => {
  let randomBomb = Math.floor(Math.random()* this.state.squares.length )
    this.setState({bomb:randomBomb})
}
  randomTreasure = () => {
  let randomTreasure = Math.floor(Math.random()* this.state.squares.length )
    this.setState({treasure:randomTreasure})
    if ( this.state.bomb === this.state.treausure) {
      return randomTreasure
    }

  }

  //if 1-7 = tree
  // if else
  // if else 8 = bomb
  // if else 9 = Treasure


  render(){
    let square = this.state.squares.map((value, index)=> {
      return(
        <Square
          value={ value }
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
