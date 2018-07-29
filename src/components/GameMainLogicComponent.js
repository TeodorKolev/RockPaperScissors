import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setToggle } from '../actions/gameActions'
import ScoreBoardComponent from './ScoreBoardComponent'
import ActionsComponent from './ActionsComponent'
import StartScreenComponent from './StartScreenComponent'
import EndScreenComponent from './EndScreenComponent'
import * as GameSettings from '../utils/gameSettings'
import {TOGGLE_OVER} from "../utils/constants";
import ActionComputer from "./ActionComputer";

class GameMainLogicComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userScore === GameSettings.VICTORY_SCORE || nextProps.computerScore === GameSettings.VICTORY_SCORE) {
      this.props.setToggle(TOGGLE_OVER, true)
    }
  }

  render() {
    return (
      <div>
        {!this.props.gameStartedState ?
          <StartScreenComponent />
          :
          <div>
            <ActionComputer />
            <ScoreBoardComponent />
            {this.props.toggleOver ?
              <EndScreenComponent/>
              :
              <ActionsComponent />
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
    toggleOver: state.toggleOver
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToggle: (type, value) => { dispatch(setToggle(type, value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMainLogicComponent)
