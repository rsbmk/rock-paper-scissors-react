import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color: transparent;
  border-radius: 0.5em;
  border: 1px solid white;

  color: white;
  font-size: 1em;
  letter-spacing: .15em;
  
  cursor: pointer;
  min-width: 8em;
  padding: 0.7em;

  display: inline-flex;
  justify-content: center;

  &:hover{
    background-color: white;
    color: #1d1d1d;
  }
`
export const WhiteButton = styled(ButtonStyled)`
  background-color: white;
  color: #1d1d1d;
`
