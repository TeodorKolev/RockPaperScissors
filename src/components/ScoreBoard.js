import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreAlertComponent from './ScoreAlert'
import { Grid, Row, Col } from 'react-bootstrap'
import './ScoreBoard.css'

const images = require.context('../assets/img/', true);

class ScoreBoard extends Component {

  render() {
    return(
      <div className='score-board-holder'>
        <Grid>
          <Row className="show-grid pusher">
            <Col xsOffset={0} xs={3} mdOffset={2} md={2}>
              {this.props.userChoice ?
                <img src={images(`./${this.props.userChoice}.png`)} alt={this.props.userChoice} />
                :
                null
              }
            </Col>
            <Col xs={6} md={4}>
              <ScoreAlertComponent />
            </Col>
            {!this.props.loadingState ?
              <Col xs={3} md={2}>
                {this.props.computerChoice ?
                  <img src={images(`./${this.props.computerChoice}.png`)} alt={this.props.computerChoice}/>
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

}

const mapStateToProps = state => {
  return {
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    loadingState: state.loadingState
  }
}

export default connect(mapStateToProps, null)(ScoreBoard)
