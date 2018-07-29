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

export const setCycle = (type, value) => {
  return {
    type: type,
    value: value
  }
}

export const clearToggles = (type) => {
  return {
    type: type
  }
}

