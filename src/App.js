import React, { Component } from 'react'
import './App.css'
import GameComponent from './components/GameMainLogicComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameComponent />
      </div>
    );
  }
}

export default App;
