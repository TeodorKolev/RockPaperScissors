const initialState = {
  gameStarted: false,
  userScore: 0,
  computerScore: 0,
  drawScore: 0,
  userChoice: '',
  computerChoice: '',
  round: 0
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_STARTED':
      return Object.assign({}, state, {
        gameStarted: action.gameStarted
      })
    case 'USER_CHOICE':
      return Object.assign({}, state, {
        userChoice: action.userChoice,
        round: state.round + 1
      })
    case 'COMPUTER_CHOICE':
      return Object.assign({}, state, {
        computerChoice: action.computerChoice,
      })
    case 'USER_SCORE':
      return Object.assign({}, state, {
        userScore: state.userScore + 1,
      })
    case 'COMPUTER_SCORE':
      return Object.assign({}, state, {
        computerScore: state.computerScore + 1,
      })
    case 'DRAW_SCORE':
      return Object.assign({}, state, {
        drawScore: state.drawScore + 1,
      })
    case 'RESTART':
      return initialState
    default:
      return state
  }
}

export default game