import React, { Component } from 'react'
import './ScoreAlertComponent.css'
import {connect} from "react-redux";
import {TOGGLE_COMPUTER_SCORE, TOGGLE_DRAW_SCORE, TOGGLE_USER_SCORE} from "../utils/constants";
import * as GameSettings from "../utils/gameSettings";
import {setChoice, setCycle, setToggle} from "../actions/gameActions";

class ScoreAlertComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userScore !== this.props.userScore) {
      this.toggleResult(TOGGLE_USER_SCORE)
    } else if (nextProps.computerScore !== this.props.computerScore) {
      this.toggleResult(TOGGLE_COMPUTER_SCORE)
    } else if (nextProps.drawScore !== this.props.drawScore) {
      this.toggleResult(TOGGLE_DRAW_SCORE)
    }
  }

  toggleResult(type) {
    this.props.setToggle(type, true)
    setTimeout(function () {
      this.props.setToggle(type, false)
    }.bind(this), GameSettings.FADE_DELAY);
  }

  render() {
    return(
      <div className='scoreboard-holder'>
        <div className={`fade ${(
          this.props.toggleUserScore ||
          this.props.toggleComputerScore ||
          this.props.toggleDrawScore) ? 'shown' : 'hided'}`}>
          {this.props.toggleUserScore ? <span>You score!</span> : null}
          {this.props.toggleComputerScore ? <span>PC score!</span> : null}
          {this.props.toggleDrawScore ? <span>Draw!</span> : null}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    toggleUserScore: state.toggleUserScore,
    toggleComputerScore: state.toggleComputerScore,
    toggleDrawScore: state.toggleDrawScore,
    userScore: state.userScore,
    computerScore: state.computerScore,
    drawScore: state.drawScore
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setChoice: (type, choice) => { dispatch(setChoice(type, choice)) },
    setCycle: (type, value) => { dispatch(setCycle(type, value)) },
    setToggle: (type, value) => { dispatch(setToggle(type, value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreAlertComponent)
