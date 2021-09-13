import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {

    const gridStyle = {
      width: "85vw",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridGap: "20px"
    }

    return (
      <div style={{...gridStyle}}>
        {
          this.state.monsters.map((monster) => {
            return (
              <CardList key={monster.id} >
                <h1>{monster?.name}</h1>
              </CardList>
            )
          })
        }
      </div>
    )
  }
}

export default App;