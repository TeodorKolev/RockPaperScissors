import React from 'react'
import { Button, Grid, Row, Col  } from 'react-bootstrap'
import './StartScreenComponent.css'

function StartScreenComponent(props) {
  return(
    <Grid>
      <Row className="show-grid">
        <Col mdOffset={4} md={4}>
            <h4>Welcome to <b>Rock / Paper / Scissors</b> Challenge!</h4>
            <p><Button bsSize="large" bsStyle="success" onClick={() => props.startGame(true)}>Play</Button></p>
        </Col>
      </Row>
    </Grid>
  )
}

export default StartScreenComponent