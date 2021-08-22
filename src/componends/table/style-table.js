import styled from 'styled-components'

export const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 10em 10em;
  justify-content: center;
  justify-items: center;
  gap: 1em 2em;
  padding: 1em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }

  .line {
    display: ${({ playing }) => (playing ? 'none' : 'block')};
    height: .875em;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 12.5;
    top: 5em;
    &:before {
      content: "";
      height: .875em;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }

    &:after {
      content: "";
      height: .875em;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }

  .in-game {
    text-align: center;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
    & p {
      margin: 1em 0;
    }
  }
  .results {
    text-align: center;
    & h2 {
      margin: 0.2em 0;
      font-size: 3.5em;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 15em 15em;
    gap: 1em 2em;

    .line {
      width: 18.75em;
      top: 6.25;
    }
  }
`
