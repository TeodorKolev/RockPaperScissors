import React, { Component } from 'react'
import './ScoreAlert.css'
import {connect} from "react-redux";
import {CLEAR_TOGGLES} from "../utils/constants";
import * as GameSettings from "../utils/gameSettings";
import {clearToggles, setChoice, setCycle} from "../actions/gameActions";
import {VICTORY_SCORE} from "../utils/gameSettings";

class ScoreAlert extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.userScore !== this.props.userScore ||
      nextProps.drawScore !== this.props.drawScore ||
      nextProps.computerScore !== this.props.computerScore) {
      this.togglesClear();
    }
  }

  togglesClear() {
    setTimeout(function () {
      this.props.clearToggles(CLEAR_TOGGLES)
    }.bind(this), GameSettings.FADE_DELAY);
  }

  render() {
    return(
      <div className='scoreboard-holder'>
        {this.props.userScore < VICTORY_SCORE && this.props.computerScore < VICTORY_SCORE ?
          <div className={`fade ${(
            this.props.toggleUserScore ||
            this.props.toggleComputerScore ||
            this.props.toggleDrawScore) ? 'shown' : 'hided'}`}>
            {this.props.toggleUserScore ? <span>You score!</span> : null}
            {this.props.toggleComputerScore ? <span>PC score!</span> : null}
            {this.props.toggleDrawScore ? <span>Draw!</span> : null}
          </div>
        :
          null
        }
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
    clearToggles: (type) => { dispatch(clearToggles(type)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreAlert)
