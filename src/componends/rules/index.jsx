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
           <img src='./src/images/image-rules.svg' alt='Game Reles' />
         </div>
       )
     }
      <Button onClick={handleClick}>RULES</Button>
    </ReulesStyled>
  )
}
