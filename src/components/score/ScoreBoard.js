import React from 'react'
import { connect } from 'react-redux'
import ScoreAlertComponent from './ScoreAlert'
import { Grid, Row, Col } from 'react-bootstrap'
import './ScoreBoard.css'

const images = require.context('../../assets/img/', true);

/**
 * Shows images of user and computer made choices.
 * @param props
 * @returns {*}
 * @constructor
 */
const ScoreBoard = props => {

  return (
    <div className='score-board-holder'>
      <Grid>
        <Row className="show-grid pusher">
          <Col xsOffset={0} xs={3} mdOffset={2} md={2}>
            {props.userChoice ?
              <img src={images(`./${props.userChoice}.png`)} alt={props.userChoice}/>
              :
              null
            }
          </Col>
          <Col xs={6} md={4}>
            <ScoreAlertComponent/>
          </Col>
          {!props.loadingState ?
            <Col xs={3} md={2}>
              {props.computerChoice ?
                <img src={images(`./${props.computerChoice}.png`)} alt={props.computerChoice}/>
                :
                null
              }
            </Col>
            :
            <Col xs={3} mdOffset={4} md={2}>
              <p className='loading'>Loading...</p>
            </Col>
          }
        </Row>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    loadingState: state.loadingState
  }
}

export default connect(mapStateToProps, null)(ScoreBoard)
