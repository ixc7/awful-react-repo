import React, { createContext, useState } from 'react'
import ReviewSection from './reviewSection'
import CardSection from './cardSection'
import Header from './header'
import '../scss/global.scss'

export const Context = createContext()

const App = () => {
  const [id, setId] = useState()
  const [view, setView] = useState({ cards: 'hidden', review: 'visible' })
  return (
    <Context.Provider value={{ id, setId, view, setView }}>
      <div className='container'>
        <Header />
        <CardSection />
        <ReviewSection />
      </div>
    </Context.Provider>
  )
}

export default App
