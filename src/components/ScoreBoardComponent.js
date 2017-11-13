import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './ScoreBoardComponent.css'
import ScoreAlertComponent from "./ScoreAlertComponent";

function ScoreBoardComponent(props) {
  let images = require.context('../assets/img/', true);
  return(
    <div className='score-board-holder'>
      <Grid>
        <Row className="show-grid">
          <Col xsOffset={0} xs={3} mdOffset={2} md={2}>
            <div>You</div>
            <div>{props.userScore}</div>
          </Col>
          <Col xs={6} md={4}>
            <div className='vs'>VS</div>
            <div className='rules'>First to three wins!</div>
          </Col>
          <Col xs={3} md={2}>
            <div>PC</div>
            <div>{props.computerScore}</div>
          </Col>
        </Row>
        <Row className="show-grid pusher">
          <Col xsOffset={0} xs={3} mdOffset={2} md={2}>
            {props.userChoice ?
              <img src={images(`./${props.userChoice}.png`)} alt={props.userChoice} />
              :
              null
            }
          </Col>
          <Col xs={6} md={4}>
            <ScoreAlertComponent
              toggleUserScore={props.toggleUserScore}
              toggleComputerScore={props.toggleComputerScore}
              toggleDraw={props.toggleDraw}
            />
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

export default ScoreBoardComponent