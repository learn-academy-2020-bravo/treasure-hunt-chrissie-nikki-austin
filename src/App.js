import React, { Component } from 'react'
import Square from './components/Square'
import BabyGroot from './images/Baby-Groot.png'
import Bomb from './images/Bomb.png'
import TreasureChest from './images/Treasure-Chest.png'
import './App.css'
import Background from './images/Backgroun.png'
import { Button } from 'reactstrap';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      hiddenSquares: [true,true,true,true,true,true,true,true,true],
      bomb: Math.floor(Math.random() * 8),
      treasureLocation: null,
      treasure: Math.floor(Math.random() * 8),
      counter: 6,
      gameOver: false

    }
}

componentDidMount = () => {
  const { bomb } = this.state
  const { treasure } = this.state
console.log(bomb,treasure)
this.setState({ treasureLocation: treasure, bombLocation: bomb})
}





  handleClicked = (index) => {
      let newHiddenSquares = [...this.state.hiddenSquares]
       newHiddenSquares[index] = false
       let countDown = this.state.counter -1
        let image = null
        console.log("hi", this.state.hiddenSquares)
          if (this.state.counter === 0 ){
          this.setState({ gameOver: true})
            alert ("loser")
          }else if(this.state.treasure === index){
            image = TreasureChest
            this.setState ({hiddenSquares: newHiddenSquares, counter: countDown, gameOver: true})
            setTimeout(() => {alert ("You Win!")}, 500)
            }else if( this.state.bomb === index){
            image = Bomb
            this.setState ({hiddenSquares: newHiddenSquares, counter: countDown, gameOver: true})
            setTimeout(() => {  alert ("You Lose!")}, 500)
          }else {
            image = BabyGroot
            this.setState ({hiddenSquares: newHiddenSquares, counter: countDown})
          }


     }

  restartGame = () =>{
    this.setState({
      hiddenSquares: [true,true,true,true,true,true,true,true,true],
      bomb: Math.floor(Math.random() * 8),
      treasure: Math.floor(Math.random() * 8),
      counter: 6,
      gameOver: false

    })
    this.componentDidMount()
  }






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
      <div id="background">
      <h1>Treasure Hunt App</h1>
          <div id="container">

              <div id = "grid">
               { square }
              </div>
         </div>
         <h3> you have {this.state.counter} turns left</h3>
         <button color="warning"  onClick= {this.restartGame}>Play Again</button>
         </div>
      </React.Fragment>
    )
  }
}

export default App
