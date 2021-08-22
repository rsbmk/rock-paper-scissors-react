import styled from 'styled-components'

export const ReulesStyled = styled.div`
  text-align: center;

  .rules-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

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
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      display: ${({ visible }) => visible ? 'block' : 'none'};
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
    }
    .rules-overlay {
      border-radius: 8px;
      cursor: pointer;
      height: 70vh;
      margin: auto;
      width: 31.25em;
    }
  }
`
