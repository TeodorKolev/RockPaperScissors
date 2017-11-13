import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import * as GameSettings from '../utils/gameSettings'
import './EndScreenComponent.css'

function EndScreenComponent(props) {
  return(
    <Grid>
      <Row className="show-grid">
      {props.userScore === GameSettings.VICTORY_SCORE ?
        <Col mdOffset={4} md={4}>
          <div className='game-over-holder'>You won!</div>
        </Col>
        :
        <Col mdOffset={4} md={4}>
          <div className='game-over-holder'>You lost!</div>
        </Col>
      }
      <Row className="show-grid">
        <Col mdOffset={4} md={4}>
          <Button bsSize="large" bsStyle="success" onClick={props.restartGame}>Play Again</Button>
        </Col>
      </Row>
    </Row>
  </Grid>
  )
}

export default EndScreenComponent