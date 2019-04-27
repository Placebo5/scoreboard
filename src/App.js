import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Player} from "./components/Player";
import AddFormPlayer from "./components/AddFormPlayer";
import {connect} from "react-redux";

class App extends React.Component{

  // handleRemovePlayer = (id) => {
  //   this.setState(prevState => ({
  //     players : prevState.players.filter(player => player.id !== id)
  //   }))
  // }
  //
  // //스코어 증가, 감소 콜백 함수
  // handleChangeScore = (id, delta) => {
  //   console.log(id, delta)
  //   this.setState(prevState => {
  //     const player = prevState.players.find(item => item.id === id);
  //     player.score = player.score + delta;
  //     return {
  //       players: [...prevState.players]
  //     }
  //   })
  // }

  render() {
    return(
      <div className="scoreboard">
        <Header title="My Scoreboard" players ={this.props.players} />
        {
         this.props.players.map(player => <Player name={player.name}
                                                   id = {player.id}
                                                   key={player.id}
                                                   score = {player.score}
                                                   changeScore={this.handleChangeScore} />)
        }
        <AddFormPlayer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
})


export default connect(mapStateToProps)(App);