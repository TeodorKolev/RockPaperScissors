import React, { Component } from 'react'
import './ScoreAlertComponent.css'
import {connect} from "react-redux";

class ScoreAlertComponent extends Component {

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
    toggleDrawScore: state.toggleDrawScore
  };
}

export default connect(mapStateToProps, null)(ScoreAlertComponent)
