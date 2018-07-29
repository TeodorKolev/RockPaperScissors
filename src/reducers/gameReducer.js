import {CLEAR_TOGGLES, COMPUTER_CHOICE, COMPUTER_SCORE, DRAW_SCORE, END, LOADING, RESTART, START, USER_CHOICE, USER_SCORE
} from '../utils/constants'
import { DEFAULT_COMPUTER_CHOICE, DEFAULT_COMPUTER_SCORE, DEFAULT_DRAW_SCORE, DEFAULT_LOADING_STATE, DEFAULT_ROUND,
  DEFAULT_TOGGLE_COMPUTER_SCORE, DEFAULT_TOGGLE_DRAW_SCORE, DEFAULT_TOGGLE_USER_SCORE, DEFAULT_USER_CHOICE,
  DEFAULT_USER_SCORE, GAME_ENDED_STATE, GAME_STARTED_STATE
} from '../utils/gameSettings'

const initialState = {
  gameStartedState: GAME_STARTED_STATE,
  gameEndedState: GAME_ENDED_STATE,
  loadingState: DEFAULT_LOADING_STATE,
  userScore: DEFAULT_USER_SCORE,
  computerScore: DEFAULT_COMPUTER_SCORE,
  drawScore: DEFAULT_DRAW_SCORE,
  userChoice: DEFAULT_USER_CHOICE,
  computerChoice: DEFAULT_COMPUTER_CHOICE,
  userRound: DEFAULT_ROUND,
  computerRound: DEFAULT_ROUND,
  toggleUserScore: DEFAULT_TOGGLE_USER_SCORE,
  toggleComputerScore: DEFAULT_TOGGLE_COMPUTER_SCORE,
  toggleDrawScore: DEFAULT_TOGGLE_DRAW_SCORE
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return Object.assign({}, state, {
        gameStartedState: action.value,
      })
    case LOADING:
      return Object.assign({}, state, {
        loadingState: action.value,
      })
    case END:
      return Object.assign({}, state, {
        gameEndedState: action.value,
      })
    case RESTART:
      return initialState
    case USER_CHOICE:
      return Object.assign({}, state, {
        userChoice: action.choice,
        userRound: state.userRound + 1
      })
    case COMPUTER_CHOICE:
      return Object.assign({}, state, {
        computerChoice: action.choice,
        computerRound: state.computerRound + 1
      })
    case USER_SCORE:
      return Object.assign({}, state, {
        userScore: state.userScore + 1,
        toggleUserScore: true
      })
    case COMPUTER_SCORE:
      return Object.assign({}, state, {
        computerScore: state.computerScore + 1,
        toggleComputerScore: true
      })
    case DRAW_SCORE:
      return Object.assign({}, state, {
        drawScore: state.drawScore + 1,
        toggleDrawScore: true
      })
    case CLEAR_TOGGLES:
      return Object.assign({}, state, {
        toggleUserScore: false,
        toggleComputerScore: false,
        toggleDrawScore: false
      })
    default:
      return state
  }
}

export default game