import React from 'react'
import { Score } from '../score'
import { HeaderStyled } from './style-header'

export function Header () {
  return (
    <HeaderStyled>
      <h1>
        Rock
        <br />
        Paper
        <br /> Scissors
      </h1>
      <Score />
    </HeaderStyled>
  )
}
