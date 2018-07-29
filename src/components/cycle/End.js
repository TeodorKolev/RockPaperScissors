import React from 'react'
import { connect } from 'react-redux'
import { setCycle } from '../../actions/gameActions'
import { RESTART, START } from '../../utils/constants'
import { VICTORY_SCORE } from '../../utils/gameSettings'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import './End.css'

/**
 * Show ending game screen.
 * @param props
 * @returns {*}
 * @constructor
 */
const End = props => {

  return (
    <Grid>
      <Row className="show-grid">
        {props.userScore === VICTORY_SCORE ?
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
            <Button bsSize="large" bsStyle="success" onClick={() => {
              props.setCycle(RESTART, true); props.setCycle(START, true)}}>
              Play Again
            </Button>
          </Col>
        </Row>
      </Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    userScore: state.userScore
  }
}

const mapDispatchToProps = { setCycle }

export default connect(mapStateToProps, mapDispatchToProps)(End)
