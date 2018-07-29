import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setScore } from '../../actions/gameActions'
import { DRAW_SCORE, PAPER, ROCK, SCISSORS } from '../../utils/constants'
import { USER_SCORE } from '../../utils/constants'
import { COMPUTER_SCORE } from '../../utils/constants'
import { DEFAULT_ROUND } from '../../utils/gameSettings'
import { Row, Col } from 'react-bootstrap'
import './SetScore.css'

/**
 * Manages and shows scores.
 */
class SetScore extends Component {

  /**
   * Automatically call setScore method on every new computer round.
   * @param nextProps
   */
  componentWillUpdate(nextProps) {
    if (nextProps.computerRound !== DEFAULT_ROUND && nextProps.computerRound !== this.props.computerRound) {
      this.setScore(nextProps.userChoice, nextProps.computerChoice)
    }
  }

  /**
   * Determine who will win game round based on player and computer choices.
   * @param userChoice
   * @param computerChoice
   * @returns {*|{type}|void}
   */
  setScore(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return this.props.setScore(DRAW_SCORE)
    }
    if (userChoice === ROCK) {
      return computerChoice === SCISSORS ? this.props.setScore(USER_SCORE) : this.props.setScore(COMPUTER_SCORE)
    }
    if (userChoice === PAPER) {
      return computerChoice === ROCK ? this.props.setScore(USER_SCORE) : this.props.setScore(COMPUTER_SCORE)
    }
    if (userChoice === SCISSORS) {
      return computerChoice === ROCK ? this.props.setScore(COMPUTER_SCORE) : this.props.setScore(USER_SCORE)
    }
  }

  render() {
    return (
      <div className='score-board-holder'>
        <div className="container">
          <Row className="show-grid">
            <Col xsOffset={0} xs={3} mdOffset={2} md={2}>
              <div>You</div>
              <div>{this.props.userScore}</div>
            </Col>
            <Col xs={6} md={4}>
              <div className='vs'>VS</div>
              <div className='rules'>First to three wins!</div>
            </Col>
            <Col xs={3} md={2}>
              <div>PC</div>
              <div>{this.props.computerScore}</div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userScore: state.userScore,
    computerScore: state.computerScore,
    computerRound: state.computerRound,
    userChoice: state.userChoice,
    computerChoice: state.computerChoice
  }
}

const mapDispatchToProps = { setScore }

export default connect(mapStateToProps, mapDispatchToProps)(SetScore)