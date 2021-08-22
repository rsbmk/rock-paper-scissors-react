import styled from 'styled-components'

export const ReulesStyled = styled.div`
  text-align: center;

  .rules-overlay {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
  }
  & h2 {
    color: #3b4262;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: 3em;
  }
  @media screen and (min-width: 1024px) {
    text-align: end;
    &:before {
      content: "";
      display: ${({ visible }) => visible ? 'block' : 'none'};
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
    }
    .rules-overlay {
      width: 31.25em;
      height: 70vh;
      margin: auto;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`
