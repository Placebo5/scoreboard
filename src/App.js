import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

class App extends React.Component{
  state = {
    players : [
      {name : "LDK" ,score:0, id:1},
      {name : "HONG" ,score:0, id:2},
      {name : "KIM" ,score:0, id:3},
      {name : "PARK" ,score:0, id:4}
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
                                                   key={player.id} score = {Player.score}/>)
        }
      </div>
    );
  }
}

export default App;