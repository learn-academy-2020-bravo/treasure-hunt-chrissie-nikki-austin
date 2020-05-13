import React, { Component } from 'react'
import Square from './components/Square'
import BabyGroot from './images/Baby-Groot.png'
import Bomb from './images/Bomb.png'
import TreasureChest from './images/Treasure-Chest.png'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      bomb: Math.floor(Math.random() * 8),
      treasure: Math.floor(Math.random() * 8),
    }
  }
  whichIndex = (index) => {
    if ((this.state.bomb === index)){
          return alert("bomb")
}
    else if ((this.state.treasure === index)){
          return alert("treasure")
        }
      else {
        return alert("tree")
      }

  }

  render(){
    let square = this.state.squares.map((value, index)=> {


      return(
        <Square
          value={ value }
          index={ index }
          whichIndex= {this.whichIndex}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>

        <div id="square">
          { square }
        </div>

      </React.Fragment>
    )
  }
}

export default App
