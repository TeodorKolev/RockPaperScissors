const USER_SCORE = 'USER_SCORE'
const COMPUTER_CHOICE = 'COMPUTER_CHOICE'
const DRAW_SCORE = 'DRAW_SCORE'
const USER_CHOICE = 'USER_CHOICE'
const COMPUTER_SCORE = 'COMPUTER_SCORE'
const RESTART = 'RESTART'

export const setUserChoice = userChoice => {
  return {
    type: USER_CHOICE,
    userChoice: userChoice
  }
}
export const setComputerChoice = computerChoice => {
  return {
    type: COMPUTER_CHOICE,
    computerChoice: computerChoice
  }
}
export const setUserScore = () => {
  return {
    type: USER_SCORE
  }
}
export const setComputerScore = () => {
  return {
    type: COMPUTER_SCORE
  }
}
export const setDrawScore = () => {
  return {
    type: DRAW_SCORE
  }
}
export const setRestart = () => {
  return {
    type: RESTART,
  }
}