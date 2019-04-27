import React from 'react';
import Counter from "./Counter";

/*export class Player extends React.PureComponent{
  //!**성능향상    -- 라이프사이클 잘 사용하지 않음
  //PureComponent
  //const return 으로 선언했을때는 +,-를 누를경우 전체 랜더링 되지만
  //클래스 PureComponent 변경하였더니 각 렌더링으로 변경됨.
  render(){
    console.log(this.props)
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => {this.props.removePlayer(this.props.id)}}>x</button>
    </span>
        <span className="player-name">{this.props.name}</span>
        <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/>
      </div>
    );
  }
}*/

export class Player extends React.Component{
  //**성능향상    -- 라이프사이클 잘 사용하지 않음
  //PureComponent
  //const return 으로 선언했을때는 +,-를 누를경우 전체 랜더링 되지만
  //클래스 PureComponent 변경하였더니 각 렌더링으로 변경됨.
  render(){
  const {name, id, removePlayer} = this.props
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => {removePlayer(id)}}>x</button>
    </span>
        <span className="player-name">{name}</span>
        <Counter />
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.score !== nextProps.score ? true : false
  }
}

// Todo: removePlayer를 redux로 변경