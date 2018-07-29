import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearToggles, setChoice, setCycle } from '../../actions/gameActions'
import { CLEAR_TOGGLES } from '../../utils/constants'
import { FADE_DELAY, VICTORY_SCORE } from '../../utils/gameSettings'
import './ScoreAlert.css'

/**
 * Show and hide game round result alerts.
 */
class ScoreAlert extends Component {

  /**
   * Calls toggleClear method on newly received score event.
   * @param nextProps
   */
  componentWillUpdate(nextProps) {
    if (nextProps.userScore !== this.props.userScore ||
      nextProps.drawScore !== this.props.drawScore ||
      nextProps.computerScore !== this.props.computerScore) {
      this.togglesClear()
    }
  }

  /**
   * Clear winner alert after certain amount of time.
   */
  togglesClear() {
    setTimeout(() => {
      this.props.clearToggles(CLEAR_TOGGLES)
    }, FADE_DELAY);
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
  }
}

const mapDispatchToProps = { setChoice, setCycle, clearToggles }

export default connect(mapStateToProps, mapDispatchToProps)(ScoreAlert)
