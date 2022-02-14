import React, { createContext, useState } from 'react'
import ReviewSection from './reviewSection'
import CardSection from './cardSection'
import Header from './header'
import '../scss/global.scss'

export const Global = createContext()

const App = () => {
  const [id, setId] = useState()
  const [view, setView] = useState({ cards: 'visible', review: 'hidden' })
  return (
    <Global.Provider value={{ id, setId, view, setView }}>
      <div className='container'>
        <Header />
        <CardSection />
        <ReviewSection />
      </div>
    </Global.Provider>
  )
}

export default App
