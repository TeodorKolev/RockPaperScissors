import {
  COMPUTER_CHOICE,
  COMPUTER_SCORE,
  DRAW_SCORE, LOADING,
  RESTART,
  START, TOGGLE_COMPUTER_SCORE, TOGGLE_DRAW_SCORE, TOGGLE_OVER,
  TOGGLE_USER_SCORE,
  USER_CHOICE,
  USER_SCORE
} from "../utils/constants";
import {
  DEFAULT_COMPUTER_CHOICE,
  DEFAULT_COMPUTER_SCORE,
  DEFAULT_DRAW_SCORE,
  DEFAULT_ROUND,
  DEFAULT_TOGGLE_COMPUTER_SCORE,
  DEFAULT_TOGGLE_DRAW_SCORE,
  DEFAULT_TOGGLE_USER_SCORE,
  DEFAULT_USER_CHOICE,
  DEFAULT_USER_SCORE,
  GAME_STARTED_STATE
} from "../utils/gameSettings";

const initialState = {
  gameStartedState: GAME_STARTED_STATE,
  userScore: DEFAULT_USER_SCORE,
  computerScore: DEFAULT_COMPUTER_SCORE,
  drawScore: DEFAULT_DRAW_SCORE,
  userChoice: DEFAULT_USER_CHOICE,
  computerChoice: DEFAULT_COMPUTER_CHOICE,
  round: DEFAULT_ROUND,
  toggleUserScore: DEFAULT_TOGGLE_USER_SCORE,
  toggleComputerScore: DEFAULT_TOGGLE_COMPUTER_SCORE,
  toggleDrawScore: DEFAULT_TOGGLE_DRAW_SCORE
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHOICE:
      return Object.assign({}, state, {
        userChoice: action.choice,
        round: state.round + 1
      })
    case COMPUTER_CHOICE:
      return Object.assign({}, state, {
        computerChoice: action.choice,
      })
    case USER_SCORE:
      return Object.assign({}, state, {
        userScore: state.userScore + 1,
      })
    case COMPUTER_SCORE:
      return Object.assign({}, state, {
        computerScore: state.computerScore + 1,
      })
    case DRAW_SCORE:
      return Object.assign({}, state, {
        drawScore: state.drawScore + 1,
      })
    case START:
      return Object.assign({}, state, {
        gameStartedState: state,
      })
    case LOADING:
      return initialState
    case RESTART:
      return initialState
    case TOGGLE_USER_SCORE:
      return Object.assign({}, state, {
        toggleUserScore: action.value,
      })
    case TOGGLE_COMPUTER_SCORE:
      return Object.assign({}, state, {
        toggleComputerScore: action.value,
      })
    case TOGGLE_DRAW_SCORE:
      return Object.assign({}, state, {
        toggleDrawScore: action.value,
      })
    case TOGGLE_OVER:
      return initialState
    default:
      return state
  }
}

export default game