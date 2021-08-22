import React from 'react'
import { ButtonStyled } from './styled-button'

export function Button ({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
