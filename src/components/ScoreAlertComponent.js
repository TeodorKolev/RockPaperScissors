import React from 'react'
import './ScoreAlertComponent.css'

function ScoreAlertComponent(props) {
  return(
    <div className='scoreboard-holder'>
      <div className={`fade ${(
        props.toggleUserScore ||
        props.toggleComputerScore ||
        props.toggleDraw) ? 'shown' : 'hided'}`}>
        {props.toggleUserScore ? <span>You score!</span> : null}
        {props.toggleComputerScore ? <span>Computer score!</span> : null}
        {props.toggleDraw ? <span>Draw!</span> : null}
      </div>
    </div>
  )
}

export default ScoreAlertComponent