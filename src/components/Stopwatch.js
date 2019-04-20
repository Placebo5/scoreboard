import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;

  state = {
    isRunning : false,
    timer: 0
  }

  handleStopwatch = () =>{
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }

  handleReset = () =>{
    this.setState({
      timer : 0
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? "Stop" : "Start"}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  tick = () => {
    if(this.state.isRunning){
      this.setState(prevState => ({
        timer : prevState.timer+1
      }))
    }
  }

  //Dom이 렌더링 된 직후:네트워크 호출, 3rd 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
    console.log(this.tickRef);
  }

  //Dom이 파괴되기 직전 : 리소스 해제
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}