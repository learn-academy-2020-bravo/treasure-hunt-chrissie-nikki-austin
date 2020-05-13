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
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      bomb: Math.floor(Math.random()* 9 ),
      treasure: Math.floor(Math.random()* 9 )
    }
  }
  showIndex = (i) => {
    let setBomb = this.state.squares[6]
    let setTreasure = this.state.squares[7]
      if (setBomb[i]=== 6){
        return "bomb"
      } else if (setTreasure [i] === 7){
        return "treasure"
      }else{
        return "tree"
      }
  }

  render(){
    let square = this.state.squares.map((value, index)=> {
      return(
        <Square
          value={ value }
          index={ index }
          showIndex= {this.showIndex}
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
