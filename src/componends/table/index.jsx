import React from 'react'
import { TableStyled } from './style-table'
import { WhiteButton } from '../button/styled-button'

import { useTable } from '../../hooks/useTable'
import { Token } from '../token'

export function Table () {
  const {
    handleTogglePlayingClick,
    homePick,
    onClickPlayGame,
    playing,
    results,
    userPick
  } = useTable()

  return (
    <TableStyled playing={playing}>
      <span className='line' />
      {!playing
        ? (
          <>
            <Token name='paper' onClick={onClickPlayGame} />
            <Token name='scissors' onClick={onClickPlayGame} />
            <Token name='rock' onClick={onClickPlayGame} />
          </>
          )
        : (
          <>
            <div className='in-game'>
              <Token name={userPick} isShadowAnimated={results === 'win'} />
              <p>YOU PICKED</p>
            </div>
            <div className='in-game'>
              {homePick && (
                <Token name={homePick} isShadowAnimated={results === 'lose'} />
              )}
              <p>HOUSE PICKED</p>
            </div>
            {results && (
              <div className='results'>
                <h2>YOU {results}</h2>
                <WhiteButton onClick={handleTogglePlayingClick}>
                  TRY AGAIN
                </WhiteButton>
              </div>
            )}
          </>
          )}
    </TableStyled>
  )
}
