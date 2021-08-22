import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  min-width: 128px;
  padding: 0.7em;
  color: white;
  font-size: 1em;
  cursor: pointer;
  letter-spacing: 2.5px;
  border: 1px solid white;
  border-radius: 0.5em;
  background-color: transparent;

  &:hover{
    background-color: white;
    color: #1d1d1d;
  }
`
export const WhiteButton = styled(ButtonStyled)`
  background-color: white;
  color: #1d1d1d;
`
