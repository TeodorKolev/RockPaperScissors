import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGameStarted } from '../actions/gameActions'
import { Button, Grid, Row, Col  } from 'react-bootstrap'
import './StartScreenComponent.css'

class StartScreenComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col mdOffset={4} md={4}>
            <h4>Welcome to <b>Rock / Paper / Scissors</b> Challenge!</h4>
            <p><Button bsSize="large" bsStyle="success" onClick={() =>
              this.props.setGameStarted(true)}>Play</Button></p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = () => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setGameStarted: (gameStartedState) => { dispatch(setGameStarted(gameStartedState)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreenComponent)