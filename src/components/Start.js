import React, {Component} from 'react'
import { Button, Grid, Row, Col  } from 'react-bootstrap'
import './Start.css'
import {connect} from "react-redux";
import {setCycle} from "../actions/gameActions";
import {START} from "../utils/constants";

class Start extends Component {

  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col mdOffset={4} md={4}>
            <h4>Welcome to <b>Rock / Paper / Scissors</b> Challenge!</h4>
            <p>
              <Button bsSize="large" bsStyle="success" onClick={() => this.props.startGame(START, true)}>Play</Button>
            </p>
          </Col>
        </Row>
      </Grid>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    startGame: (type, value) => { dispatch(setCycle(type, value)) },
  }
}

export default connect(null, mapDispatchToProps)(Start)