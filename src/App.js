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
      image:""

    }
  }
  whichIndex = (index) => {
    if (this.state.bomb === index){
        this.setState({image:Bomb})
        console.log("bomb")
}
    else if (this.state.treasure === index){

           this.setState({image:TreasureChest})
           console.log("treasure")

        }
      else {
         this.setState({image:BabyGroot})
         console.log("grut")

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
      <div id="container">
        <h1>Treasure Hunt App</h1>
          <div id = "grid">
           { square }
          </div>
          <div id="img"> <img src={this.state.image} style = {{"width":"10%"}}/></div>
     </div>
      </React.Fragment>
    )
  }
}

export default App
