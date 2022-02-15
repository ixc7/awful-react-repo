import React, { createContext, useState } from 'react'
import ReviewSection from './review'
import CardSection from './cards'
import Header from './header'
import '../scss/global.scss'

export const Global = createContext()

const App = () => {
  const [id, setId] = useState()
  const [view, setView] = useState({ cards: 'visible', review: 'hidden' })
  return (
    <Global.Provider value={{ id, setId, view, setView }}>
      <Header />
      <div className='container'>
        <CardSection />
        <ReviewSection />
      </div>
    </Global.Provider>
  )
}

export default App
