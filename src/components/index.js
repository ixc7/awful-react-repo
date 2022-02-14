import React, { createContext, useState } from 'react'
import ReviewSection from './reviewSection'
import CardSection from './cardSection'
import '../scss/global.scss'


export const Context = createContext()

const App = () => {
  const [id, setId] = useState('5d707203b65083001e956f0a')
  const [view, setView] = useState({ cards: 'visible', review: 'hidden' })
  const toggle = v => (view[v] === 'hidden' ? 'visible' : 'hidden')

  return (
    <Context.Provider value={{id, setId}}>
      <div className='container'>
        <div
          className='header'
          onClick={() => {
            setView({ cards: toggle('cards'), review: toggle('review') })
          }}
        >
          <div className='header-title'>Reviews</div>
        </div>

        <div className={view.review}>
          <ReviewSection id={id} />
        </div>

        <div className={view.cards}>
          <CardSection />
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
