import { useContext, useReducer } from 'react'
import { ACTIONS, initialState, reducer } from '../reducers/tableReducer'
import { rules, tokes } from '../utils'
import scoreContext from '../context/scoreContext'

export function useTable () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { homePick, playing, results, userPick } = state
  const { score, setScore } = useContext(scoreContext)

  function getRamdom ({ min = 0, max = 3 } = {}) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  function victory ({ name: user, pick: home }) {
    const resu = rules.find((obj) => user === obj.user && home === obj.home)
    return resu.results || ''
  }

  function launchHomePick () {
    return new Promise((resolve, reject) => {
      let pick = ''
      const interval = window.setInterval(() => {
        pick = tokes[getRamdom()]
        dispatch({
          type: ACTIONS.CHANGE_HOME_PICK,
          payload: pick
        })
      }, 75)
      window.setTimeout(() => {
        window.clearInterval(interval)
        resolve(pick)
      }, 2000)
    })
  }

  function handleTogglePlayingClick () {
    dispatch({ type: ACTIONS.TOGGLE_PLAYING })
    dispatch({ type: ACTIONS.CHANGE_RESULTS, payload: '' })
  }

  const onClickPlayGame = async (name) => {
    handleTogglePlayingClick()
    dispatch({
      type: ACTIONS.CHANGE_USER_PICK,
      payload: name
    })
    const pick = await launchHomePick()
    const res = victory({ name, pick })
    dispatch({
      type: ACTIONS.CHANGE_RESULTS,
      payload: res
    })
    if (res === 'win') setScore(score + 1)
  }

  return {
    handleTogglePlayingClick,
    homePick,
    onClickPlayGame,
    playing,
    results,
    userPick
  }
}
