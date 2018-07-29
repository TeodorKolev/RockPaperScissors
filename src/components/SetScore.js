import React, {Component} from 'react'
import * as Constants from '../utils/constants';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import {
  setScore
} from '../actions/gameActions';
import './SetScore.css';
import {DRAW_SCORE} from "../utils/constants";
import {USER_SCORE} from "../utils/constants";
import {COMPUTER_SCORE} from "../utils/constants";
import {DEFAULT_ROUND} from "../utils/gameSettings";

class SetScore extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.computerRound !== DEFAULT_ROUND && nextProps.computerRound !== this.props.computerRound) {
      this.setScore(nextProps.userChoice, nextProps.computerChoice);
    }
  }

  setScore(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return this.props.setScore(DRAW_SCORE);
    }
    if (userChoice === Constants.ROCK) {
      return computerChoice === Constants.SCISSORS ? this.props.setScore(USER_SCORE) : this.props.setScore(COMPUTER_SCORE);
    }
    if (userChoice === Constants.PAPER) {
      return computerChoice === Constants.ROCK ? this.props.setScore(USER_SCORE) : this.props.setScore(COMPUTER_SCORE);
    }
    if (userChoice === Constants.SCISSORS) {
      return computerChoice === Constants.ROCK ? this.props.setScore(COMPUTER_SCORE) : this.props.setScore(USER_SCORE);
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

const mapStateToProps = (state) => {
  return {
    userScore: state.userScore,
    computerScore: state.computerScore,
    computerRound: state.computerRound,
    userChoice: state.userChoice,
    computerChoice: state.computerChoice
  };
}


const mapDispatchToProps = dispatch => {
  return {
    setScore: (choice) => { dispatch(setScore(choice)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetScore)