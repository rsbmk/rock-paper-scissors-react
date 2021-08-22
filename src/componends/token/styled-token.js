import styled, { keyframes } from 'styled-components'

const shadow = keyframes`
  to{
    box-shadow: 0 0 0 40px rgba(255, 255, 255, .04),0 0 0 80px rgba(255, 255, 255, .03), 0 0 0 120px rgba(255, 255, 255, .02);
    transform: rotateY(360deg) scale(1.1);
  }
`

export const TokenStyled = styled.div`
  width: 8.12em;
  height: 7.8em;
  display: flex;
  border-radius: 50%;
  border: 0.9em solid ${({ color }) => color.base};
  box-shadow: 0 5px 0 ${({ color }) => color.border};
  background-color: ${({ name }) => (name === 'default' ? '#122343' : 'white')};
  cursor: pointer;
  position: relative;
  z-index: 1;
  animation: 1s ${({ isShadowAnimated }) => (isShadowAnimated ? shadow : '')}
    forwards;
  ${({ isShadowAnimated }) =>
    isShadowAnimated &&
    'box-shadow: 0 0 0 0px rgba(255, 255, 255, .04),0 0 0 0px rgba(255, 255, 255, .03), 0 0 0 0px rgba(255, 255, 255, .02);'}
  &:active {
    transform: scale(0.9);
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    flex: 1;
    border-radius: 50%;
    box-shadow: 0 -4px 0 ${({ name }) => (name === 'default' ? 'transparent' : '#bbc0d5')};
  }

  @media screen and (min-width: 768px) {
    width: 10em;
    height: 9.7em;
  }
`