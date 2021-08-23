import React, { useState } from 'react'
import { Button } from '../button'
import { ReulesStyled } from './styled-rules'

export function Rules () {
  const [showRules, setShowRules] = useState(false)
  const handleClick = _ => setShowRules(pre => !pre)

  return (
    <ReulesStyled visible={showRules}>
      {
       showRules && (
         <div onClick={handleClick} className='rules-overlay'>
           <h2>RULES</h2>
           <img src='https://raw.githubusercontent.com/rsbmk/rock-paper-scissors-react/c9e8437b0479d2dc6a0c57b8cbe1dfb5b9a2f3c8/src/images/image-rules.svg' alt='Game Reles' />
         </div>
       )
     }
      <Button onClick={handleClick}>RULES</Button>
    </ReulesStyled>
  )
}
