import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

const Header = ({players, title, updateTitle}) => {
  // const {players, title} = props;

  return (
    <header>
      <Statistics players = {players}/>
      <h1 onClick={() => updateTitle('Redux Dispatch')}>{title}</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title:PropTypes.string,
  players:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string,
    id:PropTypes.number,
    score:PropTypes.number
  }))
}


Header.defaltProps = {
  title:'Scoreboard'
}


//스토어에서 내려받음
const mapStateToProps = (state) => ({
  title : state.playerReducer.title
})


//아래 세줄 내용 대신에 맨아래 {updateTitle} 이렇게 작성해도 동일하게 작동됨
// const mapActionToProps = (dispatch) => ({
//   updateTitle: (title) => dispatch(updateTitle(title))
// })

export default connect(mapStateToProps, {updateTitle})(Header)