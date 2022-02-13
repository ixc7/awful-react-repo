import React, { useState } from 'react'
import Header from './header'
import CardSection from './cardSection'
import ReviewSection from './reviewSection'
import { STRESSTXT, truncate } from './utils'

import '../scss/global.scss'

const App = () => {
  const [view, setView] = useState({ cards: 'visible', review: 'hidden' })
  const toggle = v => (view[v] === 'hidden' ? 'visible' : 'hidden')

  return (
    <div className='container'>
      <div onClick={() => {
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
