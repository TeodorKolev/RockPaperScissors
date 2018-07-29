import React, { Component } from 'react'
import * as GameSettings from '../utils/gameSettings'
import './EndScreenComponent.css'
import {setChoice, setCycle, setToggle} from "../actions/gameActions";
import {connect} from "react-redux";
import {
  COMPUTER_CHOICE, LOADING,
  TOGGLE_COMPUTER_SCORE,
  TOGGLE_DRAW_SCORE,
  TOGGLE_USER_SCORE
} from "../utils/constants";
import * as Constants from "../utils/constants";
import {DEFAULT_ROUND} from "../utils/gameSettings";

class ActionComputer extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.userRound !== DEFAULT_ROUND && nextProps.userRound !== this.props.userRound) {
      this.setComputerChoice();
    }
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
      this.props.setCycle(LOADING, false)
    }.bind(this), GameSettings.FADE_DELAY);
  }

  hideScoreAlert() {
    this.props.setToggle(TOGGLE_USER_SCORE, false)
    this.props.setToggle(TOGGLE_COMPUTER_SCORE, false)
    this.props.setToggle(TOGGLE_DRAW_SCORE, false)
  }

  render() {
    return false
  }

}

const mapStateToProps = state => {
  return {
    userScore: state.userScore,
    userRound: state.userRound,
    userChoice: state.userChoice,
    computerChoice: state.computerChoice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCycle: (type, value) => { dispatch(setCycle(type, value)) },
    setChoice: (type, choice) => { dispatch(setChoice(type, choice)) },
    setToggle: (type, value) => { dispatch(setToggle(type, value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionComputer)
