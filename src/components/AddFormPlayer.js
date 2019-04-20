import React from 'react';

export class AddFormPlayer extends React.Component {
  state = {
    value : ""
  }

  handleValueChange = e => {
    this.setState({value:e.target.value})
  }

  handleSubmit = e => {
    // submit 기본이벤트 막기
    e.preventDefault();
    // 콜백함수 호출
    this.props.addPlayer(this.state.value);
    this.setState({value:""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleValueChange}
               placeholder="enter a player's name" required />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
