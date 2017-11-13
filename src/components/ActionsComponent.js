import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import * as Constants from '../utils/constants'
import './ActionComponent.css'

function ActionsComponent(props) {
  let images = require.context('../assets/img/', true)
  const choices = [Constants.ROCK, Constants.PAPER, Constants.SCISSORS]
  return(
    <Grid className={`fade ${props.loadingState ? 'hided' : 'shown'}`}>
      <Row className="show-grid pusher">
        <Col xsOffset={0} xs={12} mdOffset={4} md={4}>
          <Row className="show-grid">
            {choices.map(choice => (
              <Col xs={4} md={4} onClick={() => !props.loadingState ? props.setUserChoice(choice) : null} key={choice}>
                <div className='choice-image'>
                  <img src={images(`./${choice}.png`)} alt={choice} />
                </div>
                <span className='choice-name'>{choice}</span>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}

export default ActionsComponent