import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setChoice, setCycle } from '../actions/gameActions'
import ScoreBoardComponent from './ScoreBoardComponent'
import ActionsComponent from './ActionsComponent'
import StartScreenComponent from './StartScreenComponent'
import EndScreenComponent from './EndScreenComponent'
import * as Constants from '../utils/constants'
import * as GameSettings from '../utils/gameSettings'
import SetScoreComponent from './SetScoreComponent';
import {COMPUTER_CHOICE} from "../utils/constants";
import {RESTART} from "../utils/constants";

const initialState = {
  loadingState: false,
  toggleUserScore: false,
  toggleComputerScore: false,
  toggleDraw: false,
  toggleOver: false,
};

class GameMainLogicComponent extends Component {
  constructor(props) {
    super(props);

    this.restartGame = this.restartGame.bind(this)
    this.state = initialState;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.round !== 0 && nextProps.round !== this.props.round) {
      this.setComputerChoice();
    }
    if (nextProps.userScore > 0 || nextProps.computerScore > 0 || nextProps.drawScore > 0) {
      if (nextProps.userScore === GameSettings.VICTORY_SCORE || nextProps.computerScore === GameSettings.VICTORY_SCORE) {
        this.setState({toggleOver: true});
      } else {
        if (nextProps.userScore !== this.props.userScore) {
          this.toggleState('toggleUserScore')
        } else if (nextProps.computerScore !== this.props.computerScore) {
          this.toggleState('toggleComputerScore')
        } else if (nextProps.drawScore !== this.props.drawScore) {
          this.toggleState('toggleDraw')
        }
      }
    }
  }

  toggleState(prop) {
    this.setState({[prop]: true});
    setTimeout(function () {
      this.setState({[prop]: false});
    }.bind(this), GameSettings.FADE_DELAY);
  }

  restartGame() {
    this.props.setCycle(RESTART)
    this.setState(initialState);
  }

  hideScoreAlert() {
    this.setState({
      toggleUserScore: false,
      toggleComputerScore: false,
      toggleDraw: false,
    })
  }

  setLoadingState(currentState) {
    this.setState({
      loadingState: currentState
    })
  }

  setComputerChoice() {
    this.hideScoreAlert()
    this.setLoadingState(true)
    setTimeout(function() {
      let computerChoice = Math.random();
      if (computerChoice < 0.34) {
        this.props.setChoice(COMPUTER_CHOICE, Constants.ROCK)
      } else if(computerChoice <= 0.67) {
        this.props.setChoice(COMPUTER_CHOICE, Constants.PAPER)
      } else {
        this.props.setChoice(COMPUTER_CHOICE, Constants.SCISSORS)
      }
      this.setScoreRef.setScore(this.props.userChoice, this.props.computerChoice);
      this.setLoadingState(false)
    }.bind(this), GameSettings.FADE_DELAY);
  }

  render() {
    return (
      <div>
        {!this.props.gameStartedState ?
          <StartScreenComponent />
          :
          <div>
            <SetScoreComponent
              onRef={ref => (this.setScoreRef = ref)}
            />
            <ScoreBoardComponent
              userChoice={this.props.userChoice}
              computerChoice={this.props.computerChoice}
              loadingState={this.state.loadingState}
              toggleUserScore={this.state.toggleUserScore}
              toggleComputerScore={this.state.toggleComputerScore}
              toggleDraw={this.state.toggleDraw}
            />
            {this.state.toggleOver ?
              <EndScreenComponent
                userScore={this.props.userScore}
                restartGame={this.restartGame}
              />
              :
              <ActionsComponent
                loadingState={this.state.loadingState}
              />
              }
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameStartedState: state.gameStartedState,
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    userScore: state.userScore,
    computerScore: state.computerScore,
    drawScore: state.drawScore,
    round: state.round
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setChoice: (type, choice) => { dispatch(setChoice(type, choice)) },
    setCycle: (type) => { dispatch(setCycle(type)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMainLogicComponent)
