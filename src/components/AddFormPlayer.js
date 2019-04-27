import React from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions"

export class AddFormPlayer extends React.Component {
  textInput = React.createRef();

 /* state = {
    value : ""
  }

  handleValueChange = e => {
    this.setState({value:e.target.value})
  }*/

  handleSubmit = e => {
    // submit 기본이벤트 막기
    e.preventDefault();
    // 콜백함수 호출
    // this.props.addPlayer(this.state.value);
    // this.setState({value:""})

    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput}
               placeholder="enter a player's name" required />
        {/*<input type="text" value={this.state.value} onChange={this.handleValueChange}*/}
        {/*       placeholder="enter a player's name" required />*/}
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default connect(null, {addPlayer})(AddFormPlayer);