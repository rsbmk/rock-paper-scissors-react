import React, { useContext } from 'react'
import ScoreContext from '../../context/scoreContext'
import { ScoreStyled } from './styled-score'

export function Score () {
  const { score } = useContext(ScoreContext)
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  )
}
