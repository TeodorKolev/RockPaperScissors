import { Component } from 'react'
import { clearToggles, setChoice, setCycle } from "../actions/gameActions"
import { connect } from 'react-redux'
import { CLEAR_TOGGLES, COMPUTER_CHOICE, LOADING } from '../utils/constants'
import * as Constants from '../utils/constants'
import { DEFAULT_ROUND } from '../utils/gameSettings'
import { FADE_DELAY } from "../utils/gameSettings"
import './End.css'

class ActionComputer extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.userRound !== DEFAULT_ROUND && nextProps.userRound !== this.props.userRound) {
      this.setComputerChoice()
    }
  }

  setComputerChoice() {
    this.hideScoreAlert()
    this.props.setCycle(LOADING, true)
    setTimeout(function() {
      let computerChoice = Math.random()
      if (computerChoice < 0.34) {
        this.props.setChoice(COMPUTER_CHOICE, Constants.ROCK)
      } else if (computerChoice <= 0.67) {
        this.props.setChoice(COMPUTER_CHOICE, Constants.PAPER)
      } else {
        this.props.setChoice(COMPUTER_CHOICE, Constants.SCISSORS)
      }
      this.props.setCycle(LOADING, false)
    }.bind(this), FADE_DELAY)
  }

  hideScoreAlert() {
    this.props.clearToggles(CLEAR_TOGGLES)
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
    clearToggles: (type) => { dispatch(clearToggles(type)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionComputer)
