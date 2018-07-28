import React, {Component} from 'react'
import * as Constants from '../utils/constants';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import {
  setComputerScore,
  setDrawScore,
  setUserScore
} from "../actions/gameActions";

class SetScoreComponent extends Component {

  constructor(props) {
    console.log(props)
    super(props);
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  setScore(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return this.props.setDrawScore();
    }
    if (userChoice === Constants.ROCK) {
      return computerChoice === Constants.SCISSORS ? this.props.setUserScore() : this.props.setComputerScore();
    }
    if (userChoice === Constants.PAPER) {
      return computerChoice === Constants.ROCK ? this.props.setUserScore() : this.props.setComputerScore();
    }
    if (userChoice === Constants.SCISSORS) {
      return computerChoice === Constants.ROCK ? this.props.setComputerScore() : this.props.setUserScore();
    }
  }

  render() {
    return (
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
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserScore: () => { dispatch(setUserScore()) },
    setComputerScore: () => { dispatch(setComputerScore()) },
    setDrawScore: () => { dispatch(setDrawScore()) },
  }
}

export default connect(null, mapDispatchToProps)(SetScoreComponent)