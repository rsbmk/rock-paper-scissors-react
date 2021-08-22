import React, { createContext, useState } from 'react'

const Context = createContext({})

export function ScoreContextProvider ({ children }) {
  const [score, setScore] = useState(0)

  return <Context.Provider value={{ score, setScore }}>{children}</Context.Provider>
}

export default Context
