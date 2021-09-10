import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: "1"
        },
        {
          name: 'Dracula',
          id: "2"
        },
        {
          name: 'Zombie',
          id: "3"
        },
        {
          name: 'Monsters Who Lie',
          id: "4"
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <h1 key={monster.id} >{monster.name}</h1>
            )
          })
        }
      </div>
    )
  }
}

export default App;