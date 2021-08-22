import React, { useContext, useState } from 'react'
import { Token } from '../token'
import { TableStyled } from './style-table'
import { WhiteButton } from '../button/styled-button'
import scoreContext from '../../context/scoreContext'

const tokes = ['paper', 'scissors', 'rock']
const rules = [
  {
    user: 'paper',
    home: 'paper',
    results: 'draw'
  },
  {
    user: 'paper',
    home: 'rock',
    results: 'win'
  },
  {
    user: 'paper',
    home: 'scissors',
    results: 'lose'
  },
  {
    user: 'rock',
    home: 'paper',
    results: 'lose'
  },
  {
    user: 'rock',
    home: 'rock',
    results: 'draw'
  },
  {
    user: 'rock',
    home: 'scissors',
    results: 'win'
  },
  {
    user: 'scissors',
    home: 'paper',
    results: 'win'
  },
  {
    user: 'scissors',
    home: 'rock',
    results: 'lose'
  },
  {
    user: 'scissors',
    home: 'scissors',
    results: 'draw'
  }
]
function getRamdom ({ min = 0, max = 3 } = {}) {
  return Math.floor(Math.random() * (max - min)) + min
}

function victory ({ name: user, pick: home }) {
  const resu = rules.find((obj) => user === obj.user && home === obj.home)
  return resu.results || ''
}

export function Table () {
  const [homePick, setHomePick] = useState('default')
  const [playing, setPlaying] = useState(false)
  const [results, setResults] = useState('')
  const [userPick, setUserPick] = useState('')
  const { score, setScore } = useContext(scoreContext)

  function launchHomePick () {
    return new Promise((resolve, reject) => {
      let pick = ''
      const interval = window.setInterval(() => {
        pick = tokes[getRamdom()]
        setHomePick(pick)
      }, 75)
      window.setTimeout(() => {
        window.clearInterval(interval)
        resolve(pick)
      }, 2000)
    })
  }

  const onClick = async (name) => {
    handleTogglePlayingClick()
    setUserPick(name)
    const pick = await launchHomePick()
    const res = victory({ name, pick })
    setResults(res)
    if (res === 'win') setScore(score + 1)
  }
  const handleTogglePlayingClick = () => {
    setPlaying((pre) => !pre)
    setResults('')
  }

  return (
    <TableStyled playing={playing}>
      <span className='line' />
      {!playing
        ? (
          <>
            <Token name='paper' onClick={onClick} />
            <Token name='scissors' onClick={onClick} />
            <Token name='rock' onClick={onClick} />
          </>
          )
        : (
          <>
            <div className='in-game'>
              <Token name={userPick} isShadowAnimated={(results === 'win')} />
              <p>YOU PICKED</p>
            </div>
            <div className='in-game'>
              {homePick && <Token name={homePick} isShadowAnimated={(results === 'lose')} />}
              <p>HOUSE PICKED</p>
            </div>
            {results && (
              <div className='results'>
                <h2>YOU {results}</h2>
                <WhiteButton onClick={handleTogglePlayingClick}>
                  TRY AGAIN
                </WhiteButton>
              </div>)}
          </>
          )}
    </TableStyled>
  )
}
