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
      hiddenSquares: [true,true,true,true,true,true,true,true,true],
      bomb: Math.floor(Math.random() * 8),
      treasure: Math.floor(Math.random() * 8)



    }
  }
  handleClicked = (index) => {
      let newHiddenSquares = [...this.state.hiddenSquares]
       newHiddenSquares[index] = false
       this.setState ({hiddenSquares: newHiddenSquares})


     }

    render(){
      console.log(this.state.hiddenSquares)
    let square = this.state.hiddenSquares.map((value, index)=> {
      let image = null
      if (value === false){
        if (this.state.treasure === index){
          image = TreasureChest
        }else if( this.state.bomb === index){
          image = Bomb
        }else {
          image = BabyGroot
        }

      }
      return(
        <Square
          value={ value }
          index={ index }
          handleClicked= {this.handleClicked}
          image = {image}
          key = {index}
          />
        )
    }
  )



    return(
      <React.Fragment>
      <div id="container">
        <h1>Treasure Hunt App</h1>
          <div id = "grid">
           { square }
          </div>
     </div>
      </React.Fragment>
    )
  }
}

export default App
