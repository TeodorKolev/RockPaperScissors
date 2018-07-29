import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setChoice } from '../../actions/gameActions'
import { PAPER, ROCK, SCISSORS, USER_CHOICE } from '../../utils/constants'
import { Grid, Row, Col } from 'react-bootstrap'
import './ActionComponent.css'

const images = require.context('../../assets/img/', true)

/**
 * Manages user interactions.
 */
class ActionUser extends Component {

  render() {
    const choices = [ROCK, PAPER, SCISSORS]
    return (
      <Grid className={`fade ${this.props.loadingState ? 'hided' : 'shown'}`}>
        <Row className="show-grid pusher">
          <Col xsOffset={0} xs={12} mdOffset={4} md={4}>
            <Row className="show-grid">
              {choices.map(choice => (
                <Col xs={4} md={4} onClick={() => !this.props.loadingState ?
                  this.props.setChoice(USER_CHOICE, choice)
                  :
                  null} key={choice}>
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
}

const mapStateToProps = state => {
  return {
    loadingState: state.loadingState
  }
}

const mapDispatchToProps = { setChoice }

export default connect(mapStateToProps, mapDispatchToProps)(ActionUser)
