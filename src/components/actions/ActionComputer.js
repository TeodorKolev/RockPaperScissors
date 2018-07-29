import { Component } from 'react'
import { clearToggles, setChoice, setCycle } from "../../actions/gameActions"
import { connect } from 'react-redux'
import { CLEAR_TOGGLES, COMPUTER_CHOICE, LOADING } from '../../utils/constants'
import * as Constants from '../../utils/constants'
import { DEFAULT_ROUND } from '../../utils/gameSettings'
import { FADE_DELAY } from "../../utils/gameSettings"
import '../cycle/End.css'

/**
 * Manages computer actions.
 */
class ActionComputer extends Component {

  /**
   * Calls setComputerChoice method on every new user round.
   * @param nextProps
   */
  componentWillUpdate(nextProps) {
    if (nextProps.userRound !== DEFAULT_ROUND && nextProps.userRound !== this.props.userRound) {
      this.setComputerChoice()
    }
  }

  /**
   *Clear all alerts, show loading, define computer choice and hide loading after certain amount of time.
   */
  setComputerChoice() {
    this.hideScoreAlert()
    this.props.setCycle(LOADING, true)
    setTimeout(function() {
     this.defineComputerChoice()
      this.props.setCycle(LOADING, false)
    }.bind(this), FADE_DELAY)
  }

  /**
   * Define computer choice based on random number.
   */
  defineComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.34) {
      this.props.setChoice(COMPUTER_CHOICE, Constants.ROCK)
    } else if (computerChoice <= 0.67) {
      this.props.setChoice(COMPUTER_CHOICE, Constants.PAPER)
    } else {
      this.props.setChoice(COMPUTER_CHOICE, Constants.SCISSORS)
    }
  }

  /**
   * Hide instantly showed score alert.
   */
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

const mapDispatchToProps = { setCycle, setChoice, clearToggles }

export default connect(mapStateToProps, mapDispatchToProps)(ActionComputer)
