import React from 'react';

export class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      score : 0
    }
  }

  incrementScore = () => {
    console.log('incrementScore', this)
    this.setState(prevState => ({score: prevState.score + 1 }));
  }

  // decrementScore =() => {
  //   this.setState(prevState => ({score: prevState.score - 1 }));
  // }

  decrementScore () {
    this.setState(prevState => ({score: prevState.score - 1 }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}