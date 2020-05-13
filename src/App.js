import React, { Component } from 'react'
import Square from './components/Square'
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
  showIndex = () => {
    alert("hello")
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
