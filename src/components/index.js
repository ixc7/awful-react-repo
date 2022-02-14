import React, { createContext, useState } from 'react'
import ReviewSection from './reviewSection'
import CardSection from './cardSection'
import '../scss/global.scss'

import { STRESSTXT, truncate } from './utils'
import data from '../static/data.json'
const reply = {
  text: STRESSTXT,
  author: truncate(STRESSTXT, 18),
  date: truncate(STRESSTXT, 10)
}
const review = data[0]

export const Context = createContext()

const App = () => {
  const [id, setId] = useState(false)
  const [view, setView] = useState({ cards: 'hidden', review: 'visible' })
  const toggle = v => (view[v] === 'hidden' ? 'visible' : 'hidden')

  return (
    <Context.Provider value={id}>
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
          <ReviewSection 
            review={review}
            reply={reply}
          />
        </div>

        <div className={view.cards}>
          <CardSection />
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
