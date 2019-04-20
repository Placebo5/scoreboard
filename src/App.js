import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

class App extends React.Component{
  state = {
    players : [
      {name : "LDK" , id:1},
      {name : "HONG" , id:2},
      {name : "KIM" , id:3},
      {name : "PARK" , id:4}
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players : prevState.players.filter(player => player.id !== id)
    }))
  }

  render() {
    return(
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPllayers ={11} />

        {
          this.state.players.map(player => <Player name={player.name}
                                                   removePlayer={this.handleRemovePlayer}
                                                   id = {player.id}
                                                   key={player.id}/>)
        }
      </div>
    );
  }
}

export default App;