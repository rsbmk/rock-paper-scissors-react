import React from 'react'
import { TokenStyled } from './styled-token'

const color = {
  paper: {
    base: '#516ef4',
    border: '#2543c3'
  },
  rock: {
    base: '#de3a5a',
    border: '#980e31'
  },
  scissors: {
    base: '#eca81e',
    border: '#c76c14'
  },
  default: {
    base: 'transparent',
    border: 'transparent'
  }
}

export function Token ({
  name = 'default',
  onClick,
  isShadowAnimated = false
} = {}) {
  const handleTokenClick = () => onClick(name)

  return (
    <TokenStyled
      onClick={handleTokenClick}
      color={color[name]}
      name={name}
      isShadowAnimated={isShadowAnimated}
    >
      <div className='box'>
        {name !== 'default' && (
          <img
            src={`https://raw.githubusercontent.com/rsbmk/rock-paper-scissors-react/e0c9edde82fd7e1352f883ded9462a8300ee55ac/src/images/icon-${name}.svg`}
            alt=''
          />
        )}
      </div>
    </TokenStyled>
  )
}
