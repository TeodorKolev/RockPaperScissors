import React from 'react'
import { connect } from 'react-redux'
import { setCycle } from '../../actions/gameActions'
import { START } from '../../utils/constants'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import './Start.css'

/**
 * Show starting screen.
 * @param props
 * @returns {*}
 * @constructor
 */
const Start = props => {

  return(
    <Grid>
      <Row className="show-grid">
        <Col mdOffset={4} md={4}>
          <h4>Welcome to <b>Rock / Paper / Scissors</b> Challenge!</h4>
          <p>
            <Button bsSize="large" bsStyle="success" onClick={() => props.setCycle(START, true)}>Play</Button>
          </p>
        </Col>
      </Row>
    </Grid>
  )
}

const mapDispatchToProps = { setCycle }

export default connect(null, mapDispatchToProps)(Start)