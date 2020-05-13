import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

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
