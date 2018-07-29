import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setCycle} from '../actions/gameActions'
import ScoreBoard from './ScoreBoard'
import ActionUser from './ActionUser'
import Start from './Start'
import End from './End'
import * as GameSettings from '../utils/gameSettings'
import {END} from "../utils/constants";
import ActionComputer from "./ActionComputer";
import SetScore from "./SetScore";

class Main extends Component {

  componentWillReceiveProps(nextProps) {
    if ((nextProps.userScore !== this.props.userScore || nextProps.computerScore !== this.props.computerScore) &&
      (nextProps.userScore === GameSettings.VICTORY_SCORE || nextProps.computerScore === GameSettings.VICTORY_SCORE)) {
      this.props.setCycle(END, true)
    }
  }

  render() {
    return (
      <div>
        {!this.props.gameStartedState ?
          <Start />
          :
          <div>
            <ActionComputer />
            <SetScore />
            <ScoreBoard />
            {this.props.gameEndedState ?
              <End/>
              :
              <ActionUser />
              }
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameStartedState: state.gameStartedState,
    userScore: state.userScore,
    computerScore: state.computerScore,
    gameEndedState: state.gameEndedState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCycle: (type, value) => { dispatch(setCycle(type, value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
