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
      treasure: Math.floor(Math.random() * 8),
      counter: 6,
      gameOver: false

    }
  }
  handleClicked = (index) => {
      let newHiddenSquares = [...this.state.hiddenSquares]
       newHiddenSquares[index] = false
       let countDown = this.state.counter -1
        console.log(this.state.counter)
        let image = null
        console.log("hi", this.state.hiddenSquares)
          if (this.state.treasure === index){
            image = TreasureChest
            this.setState ({hiddenSquares: newHiddenSquares, counter: countDown})
            alert ("You Win!")
            }else if( this.state.bomb === index){
            image = Bomb
            this.setState ({hiddenSquares: newHiddenSquares, counter: countDown})
            alert ("You Lose!")
          }else {
            image = BabyGroot
            this.setState ({hiddenSquares: newHiddenSquares, counter: countDown})
          }


     }

    // endGame = () => {
    //   if( this.state.counter === 0){
    //    return alert ("game over")
    //    return alert("you win")
    //    return alert("you lose")

    //  }
//  }

    render(){
      // console.log("treasure", this.state.treasure)
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
      <h1>Treasure Hunt App</h1>
      <div id="container">

          <div id = "grid">
           { square }
          </div>
     </div>
     <h3> you have {this.state.counter} turns left</h3>
      </React.Fragment>
    )
  }
}

export default App
