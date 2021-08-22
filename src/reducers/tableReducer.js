export const ACTIONS = {
  CHANGE_HOME_PICK: 'homePick',
  TOGGLE_PLAYING: 'playing',
  CHANGE_RESULTS: 'results',
  CHANGE_USER_PICK: 'userPick'
}

const ACTIONS_REDUCER = {
  [ACTIONS.CHANGE_HOME_PICK]: (state, actions) => ({
    ...state,
    homePick: actions.payload
  }),
  [ACTIONS.TOGGLE_PLAYING]: (state, actions) => ({
    ...state,
    playing: !state.playing
  }),
  [ACTIONS.CHANGE_RESULTS]: (state, actions) => ({
    ...state,
    results: actions.payload
  }),
  [ACTIONS.CHANGE_USER_PICK]: (state, actions) => ({
    ...state,
    userPick: actions.payload
  })
}

export const initialState = {
  homePick: 'default',
  playing: false,
  results: '',
  userPick: ''
}

export const reducer = (state, actions) => {
  const actionReducer = ACTIONS_REDUCER[actions.type]
  return actionReducer ? actionReducer(state, actions) : state
}
