import { useState } from 'react'
import Header from './header'
import Review from './review'
import CardSection from './cardSection'
import Reply from './reply'
import { STRESSTXT, truncate } from './utils'

const App = () => {
  const [state, toggleView] = useState({cards: true, review: false})

  return (
    <div className='container'>
      <div onClick={() => { toggleView({cards: !state.cards, review: !state.review }) }}>
        <Header title='Reviews'/>
      </div>

      <div className={state.cards ? 'visible' : 'hidden'}>
        <CardSection />
      </div>

      <div className={state.review ? 'visible' : 'hidden'}>
        <div className='review-container'>
          <Review
            title={truncate(STRESSTXT, 80)}
            stars='5'
            text={STRESSTXT}
            author={truncate(STRESSTXT, 18)}
            date='01/01/2019'
          />
          <Reply
            text={STRESSTXT}
            author={truncate(STRESSTXT, 18)}
            date='01/01/2019'
          />
        </div>
      </div>

    </div>
  )
}

export default App
