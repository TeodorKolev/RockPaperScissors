import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setChoice, setCycle, setToggle} from '../actions/gameActions'
import ScoreBoardComponent from './ScoreBoardComponent'
import ActionsComponent from './ActionsComponent'
import StartScreenComponent from './StartScreenComponent'
import EndScreenComponent from './EndScreenComponent'
import * as Constants from '../utils/constants'
import * as GameSettings from '../utils/gameSettings'
import SetScoreComponent from './SetScoreComponent';
import {COMPUTER_CHOICE} from "../utils/constants";
import {TOGGLE_USER_SCORE} from "../utils/constants";
import {TOGGLE_COMPUTER_SCORE} from "../utils/constants";
import {TOGGLE_DRAW_SCORE} from "../utils/constants";
import {TOGGLE_OVER} from "../utils/constants";
import {LOADING} from "../utils/constants";

class GameMainLogicComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.round !== 0 && nextProps.round !== this.props.round) {
      this.setComputerChoice();
    }
    if (nextProps.userScore > 0 || nextProps.computerScore > 0 || nextProps.drawScore > 0) {
      if (nextProps.userScore === GameSettings.VICTORY_SCORE || nextProps.computerScore === GameSettings.VICTORY_SCORE) {
        this.props.setToggle(TOGGLE_OVER, true)
      }
    }
  }

  hideScoreAlert() {
    this.props.setToggle(TOGGLE_USER_SCORE, false)
    this.props.setToggle(TOGGLE_COMPUTER_SCORE, false)
    this.props.setToggle(TOGGLE_DRAW_SCORE, false)
  }

  setComputerChoice() {
    this.hideScoreAlert()
    this.props.setCycle(LOADING, true)
    setTimeout(function() {
      let computerChoice = Math.random();
      if (computerChoice < 0.34) {
        this.props.setChoice(COMPUTER_CHOICE, Constants.ROCK)
      } else if (computerChoice <= 0.67) {
        this.props.setChoice(COMPUTER_CHOICE, Constants.PAPER)
      } else {
        this.props.setChoice(COMPUTER_CHOICE, Constants.SCISSORS)
      }
      this.setScoreRef.setScore(this.props.userChoice, this.props.computerChoice);
      this.props.setCycle(LOADING, false)
    }.bind(this), GameSettings.FADE_DELAY);
  }

  render() {
    return (
      <div>
        {!this.props.gameStartedState ?
          <StartScreenComponent />
          :
          <div>
            <SetScoreComponent
              onRef={ref => (this.setScoreRef = ref)}
            />
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
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    userScore: state.userScore,
    computerScore: state.computerScore,
    drawScore: state.drawScore,
    toggleDrawScore: state.toggleDrawScore,
    round: state.round,
    toggleOver: state.toggleOver
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setChoice: (type, choice) => { dispatch(setChoice(type, choice)) },
    setCycle: (type, value) => { dispatch(setCycle(type, value)) },
    setToggle: (type, value) => { dispatch(setToggle(type, value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMainLogicComponent)
