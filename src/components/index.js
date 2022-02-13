import React, { useState } from 'react'
import Header from './header'
import CardSection from './cardSection'
import ReviewSection from './reviewSection'
import { STRESSTXT, truncate } from './utils'

import '../scss/global.scss'

const App = () => {
  const [view, setView] = useState({ cards: 'hidden', review: 'visible' })
  const toggle = v => (view[v] === 'hidden' ? 'visible' : 'hidden')

  return (
    <div className='container'>
      <div className='header' onClick={() => {
        setView({ cards: toggle('cards'), review: toggle('review') })
      }}
      >
        <Header title='Reviews' />
      </div>

      <div className={view.review}>
        <ReviewSection />
      </div>

      <div className={view.cards}>
        <CardSection />
      </div>
    </div>
  )
}

export default App
