export const setChoice = (type, choice) => {
  return {
    type: type,
    choice: choice
  }
}

export const setScore = type => {
  return {
    type: type
  }
}

export const setToggle = (type, value) => {
  return {
    type: type,
    value: value,
  }
}

export const setCycle = (type, value) => {
  return {
    type: type,
    value: value,
  }
}

