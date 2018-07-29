import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import * as Constants from '../utils/constants'
import './ActionComponent.css'
import {USER_CHOICE} from "../utils/constants";
import {setChoice} from "../actions/gameActions";
import {connect} from "react-redux";

class ActionsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let images = require.context('../assets/img/', true)
    const choices = [Constants.ROCK, Constants.PAPER, Constants.SCISSORS]
    return (
      <Grid className={`fade ${this.props.loadingState ? 'hided' : 'shown'}`}>
        <Row className="show-grid pusher">
          <Col xsOffset={0} xs={12} mdOffset={4} md={4}>
            <Row className="show-grid">
              {choices.map(choice => (
                <Col xs={4} md={4} onClick={() => !this.props.loadingState ? this.props.setChoice(USER_CHOICE, choice) : null} key={choice}>
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

const mapDispatchToProps = dispatch => {
  return {
    setChoice: (type, choice) => { dispatch(setChoice(type, choice)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsComponent)
