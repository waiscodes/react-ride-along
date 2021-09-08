import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        {
          name: 'Frankenstein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        },
        {
          name: 'Monsters Who Lie'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>HEllo world</h1>
        </header>
      </div>
    )
  }
}

export default App;