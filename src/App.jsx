import React from 'react'
import { AppStyled } from './style-app'

import { Header } from './componends/header'
import { Rules } from './componends/rules'
import { ScoreContextProvider } from './context/scoreContext'
import { Table } from './componends/table'
import { Wrapper } from './componends/wrapper'

function App () {
  return (
    <AppStyled>
      <Wrapper>
        <div className='app-content'>
          <ScoreContextProvider>
            <Header />
            <Table />
          </ScoreContextProvider>
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  )
}

export default App
