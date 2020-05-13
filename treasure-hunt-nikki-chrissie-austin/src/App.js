import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      bomb: "bomb",
      treasure: "treasure",
      tree: "tree"
    }
  }


  randomBomb = () => {
    let bomb = Math.floor(Math.random()* this.state.squares.length )
    this.setState({bomb:randomBomb})
    if ( this.state.squares  === randomBomb){
      alert ("You Lose!")
    }
  }

  randomTreasure = () => {
    let treasure = Math.floor(Math.random()* this.state.squares.length )
    this.setState({treasure:randomTreasure})
    if ( this.state.bomb === this.state.treasure) {
      randomTreasure()
    }
  }
  componentDidMount = () => {
    randomBomb()
    randomTreasure()
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


          { this.state.treasure}
          { this.state.bomb }
            random words


      </React.Fragment>
    )
  }
}
export default App
